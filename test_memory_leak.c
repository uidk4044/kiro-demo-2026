#include <stdlib.h>

// 内存泄漏：malloc 后没有 free
void memory_leak() {
    int *ptr = (int*)malloc(sizeof(int) * 10);
    ptr[0] = 42;
    // 忘记 free(ptr)
}

int main() {
    memory_leak();
    return 0;
}
