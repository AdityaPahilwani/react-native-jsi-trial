#include <jni.h>
#include <jsi/jsi.h>
#include "Binding.h"
#include "example.h"

using namespace facebook;

void installJsiTrial(jsi::Runtime& jsiRuntime) {
  auto multiply = jsi::Function::createFromHostFunction(
      jsiRuntime,
      jsi::PropNameID::forAscii(jsiRuntime, "multiply"),
      2,  
      [](jsi::Runtime& runtime, const jsi::Value& thisValue, const jsi::Value* arguments, size_t count) -> jsi::Value {
        return example::multiply(arguments[0].asNumber(),arguments[1].asNumber());
      }
  );
  jsiRuntime.global().setProperty(jsiRuntime, "multiply", std::move(multiply));
}
