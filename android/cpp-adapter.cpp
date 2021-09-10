#include <jni.h>
#include <android/log.h>
#include "Binding.h"
#include <sys/types.h>
#include "pthread.h"
#include <jsi/jsi.h>

using namespace facebook::jsi;
using namespace std;

JavaVM *jvm;

// global ref to our class instance
static jobject globalObjectRef;
// global ref to our class
static jclass globalClassRef;

JNIEnv *attachCurrentThread()
{
    JavaVMAttachArgs args{JNI_VERSION_1_6, nullptr, nullptr};
    JNIEnv *env = nullptr;
    auto result = jvm->AttachCurrentThread(&env, &args);
    return env;
}

void install(facebook::jsi::Runtime &jsiRuntime)
{
    auto getDeviceInfo = Function::createFromHostFunction(jsiRuntime,
                                                          PropNameID::forAscii(jsiRuntime,
                                                                               "getDeviceName"),
                                                          0,
                                                          [](Runtime &runtime,
                                                             const Value &thisValue,
                                                             const Value *arguments,
                                                             size_t count) -> Value
                                                          {
                                                              auto jniEnv = attachCurrentThread();
                                                              jmethodID getDeviceInfo = jniEnv->GetStaticMethodID(globalClassRef, "getDeviceInfo", "()Ljava/lang/String;");
                                                              jobject result = jniEnv->CallStaticObjectMethod(
                                                                  globalClassRef, getDeviceInfo);
                                                              const char *str = jniEnv->GetStringUTFChars(
                                                                  (jstring)result, NULL);

                                                              return Value(runtime,
                                                                           String::createFromUtf8(
                                                                               runtime, str));
                                                          });

    jsiRuntime.global().setProperty(jsiRuntime, "getDeviceInfo", move(getDeviceInfo));
}

extern "C" JNIEXPORT void JNICALL
Java_com_reactnativejsitrial_JsiTrialModule_initialize(JNIEnv *env, jobject thiz, jlong jsi)
{

    auto runtime = reinterpret_cast<facebook::jsi::Runtime *>(jsi);

    if (runtime)
    {
        installJsiTrial(*runtime);
        install(*runtime);
    }

    env->GetJavaVM(&jvm);

    globalObjectRef = env->NewGlobalRef(thiz);

    auto clazz = env->FindClass("com/reactnativejsitrial/JsiTrialModule");

    globalClassRef = (jclass)env->NewGlobalRef(clazz);
}
