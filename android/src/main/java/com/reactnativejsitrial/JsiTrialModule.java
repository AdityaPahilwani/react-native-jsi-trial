package com.reactnativejsitrial;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

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
    private static native void initialize(long jsiPtr, String docDir);

    public JsiTrialModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void initialize() {
        super.initialize();

        JsiTrialModule.initialize(this.getReactApplicationContext().getJavaScriptContextHolder().get(),
                this.getReactApplicationContext().getFilesDir().getAbsolutePath());
    }
}
