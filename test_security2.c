#include <stdio.h>

// 硬编码敏感信息 - 触发静态代码检查
const char* API_KEY = "sk-abcdef1234567890";
const char* PASSWORD = "admin123456";
const char* SECRET = "my-super-secret-key";
const char* TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxx";

int main() {
    printf("Using API_KEY: %s\n", API_KEY);
    return 0;
}
