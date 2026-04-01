#include <stdlib.h>

// 空指针解引用
void null_pointer() {
    int *ptr = NULL;
    *ptr = 42;  // 解引用空指针，会崩溃
}

// 未检查 malloc 返回值
void unchecked_malloc() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 100;  // 如果 malloc 失败返回 NULL，这里会崩溃
    free(ptr);
}

int main() {
    null_pointer();
    return 0;
}
