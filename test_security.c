#include <stdio.h>
#include <string.h>

// 硬编码的敏感信息 - 会触发静态代码检查警告
const char* API_KEY = "sk-abcdef1234567890";
const char* PASSWORD = "admin123456";
const char* SECRET = "my-super-secret-key";
const char* TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxx";

int main() {
    printf("Connecting to server...\n");
    printf("Using API_KEY: %s\n", API_KEY);
    return 0;
}
