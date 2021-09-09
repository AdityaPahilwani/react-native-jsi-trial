cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

# Specifies a path to native header files.
include_directories(
            ../cpp
            ../example/node_modules/react-native/ReactCommon/jsi
)


add_library(cpp
            SHARED
            ../example/node_modules/react-native/ReactCommon/jsi/jsi/jsi.cpp
            ../cpp/example.cpp
            cpp-adapter.cpp
            ../cpp/Binding.cpp
)

