package com.reactnativejsitrial;

import androidx.annotation.NonNull;

import android.os.Build;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.net.InetAddress;

@ReactModule(name = JsiTrialModule.NAME)
public class JsiTrialModule extends ReactContextBaseJavaModule {
  static {
    try {
      // Used to load the 'native-lib' library on application startup.
      System.loadLibrary("cpp");
    } catch (Exception ignored) {
    }
  }

  public static final String NAME = "JsiTrial";

  private static native void initialize(long jsi);

  public JsiTrialModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  public static String getDeviceInfo() {
    String BRAND = Build.BRAND;
    String DEVICE = Build.DEVICE;

    return BRAND + " " + DEVICE + " " + Build.ID;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @Override
  public void initialize() {
    super.initialize();

    JsiTrialModule.initialize(this.getReactApplicationContext().getJavaScriptContextHolder().get());
  }
}
