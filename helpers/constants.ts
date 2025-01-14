// The minimum required version of rust.
export const RUSTC_VERSION = "1.68.0"
export const SHUTTLE_VERSION = "0.16.0"
export const PROTOC_VERSION = "3.19.0"

export const SHUTTLE_TAG = `v${SHUTTLE_VERSION}`
export const SHUTTLE_DOWNLOAD_URL = `https://github.com/shuttle-hq/shuttle/releases/download/${SHUTTLE_TAG}/`

export const SHUTTLE_LINUX_TARGET = `x86_64-unknown-linux-gnu`
export const SHUTTLE_MAC_TARGET = `x86_64-apple-darwin`
export const SHUTTLE_WINDOWS_TARGET = `x86_64-pc-windows-msvc`

export const SHUTTLE_EXAMPLE_URL =
    "https://github.com/shuttle-hq/shuttle-examples/axum/static-next-server"
