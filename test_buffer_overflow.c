#include <string.h>

// 缓冲区溢出
void buffer_overflow() {
    char buf[10];
    strcpy(buf, "This string is way too long for the buffer!");  // 溢出
}

// 数组越界
void array_out_of_bounds() {
    int arr[5];
    for (int i = 0; i <= 5; i++) {  // i=5 时越界
        arr[i] = i;
    }
}

int main() {
    buffer_overflow();
    array_out_of_bounds();
    return 0;
}
