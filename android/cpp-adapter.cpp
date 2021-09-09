#include <jni.h>
#include "Binding.h"


extern "C"
JNIEXPORT void JNICALL
Java_com_reactnativejsitrial_JsiTrialModule_initialize(JNIEnv* env, jclass clazz, jlong jsiPtr) {
    installJsiTrial(*reinterpret_cast<facebook::jsi::Runtime*>(jsiPtr));
}
