package com.kalachhetra

import android.provider.Settings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class DevModeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "DevModeChecker"

    @ReactMethod
    fun isDeveloperModeEnabled(promise: Promise) {
        try {
            val isEnabled = Settings.Global.getInt(
                reactApplicationContext.contentResolver,
                Settings.Global.DEVELOPMENT_SETTINGS_ENABLED,
                0
            ) == 1

            promise.resolve(isEnabled)
        } catch (e: Exception) {
            promise.reject("DEV_MODE_ERROR", e.message)
        }
    }
}
