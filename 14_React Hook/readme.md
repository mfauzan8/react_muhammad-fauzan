# React Hooks

**Fitur baru di React 16.8.**  
Dengan react Hooks kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.

## Kenapa ada React Hooks ?

- Kesulitan untuk menggunakan kembali stateful logic antar komponen.
- Komponen kompleks menjadi sulit untuk dimengerti

## Hooks pada React

#### 1. Hook Dasar

- useState
- useEffect
- useContext

#### 2. Hook Tambahan

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## Aturan Hooks

- **Hanya panggil hook di tingkat atas** ( Jangan memanggil hook dari dalam loops, conditions atau nested functions).
- **Hanya panggil Hooks dari fungsi-fungsi React** (Jangan memanggil hooks dari fungsi-fungsi javascript biasa).

# Implementasi UseState & useEffect di Component

## useState

- Function Component  
  ![useState.png](https://i.postimg.cc/y6Qjs2Z2/React.png)

- Implementasi Hooks  
  ![React.png](https://i.postimg.cc/zD2ZbJMj/React.png)

- Deklarasi variabel state  
  [![React.png](https://i.postimg.cc/TPbgmYCW/React.png)](https://postimg.cc/hJSXRgFS)

- Apa yang terjadi ketika memanggil useState? Dan Apa yang kita berikan ke useState sebagai sebuah argumen? Apa yang dikembalikan useState?  
  [![React.png](https://i.postimg.cc/x8f6tb4Z/React.png)](https://postimg.cc/HcN0LjH0)

- Membaca state  
  [![React.png](https://i.postimg.cc/mkZy4WRp/React.png)](https://postimg.cc/k6ZbNZ2W)

- Melakukan pembaruan State  
  [![React.png](https://i.postimg.cc/L8k5tYjf/React.png)](https://postimg.cc/XrJn3vH7)

**Full Code :**

[![React.png](https://i.postimg.cc/Y28JWp49/React.png)](https://postimg.cc/LhYCdF3K)

**Tips : Menggunakan Banyak Variabel State**

[![React.png](https://i.postimg.cc/gJcbCrwC/React.png)](https://postimg.cc/Y4PPgrzR)

## useEffect

- Effect Hook memungkinkan kita melakukan efek samping (side effects) didalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan

### Efek tanpa pembersihan

[![React.png](https://i.postimg.cc/9QMRhPSp/React.png)](https://postimg.cc/hfkP8mKz)
[![React.png](https://i.postimg.cc/y8g1jLtw/React.png)](https://postimg.cc/gxpbkHYD)

### Efek dengan pembersihan

[![React.png](https://i.postimg.cc/MG5FQStx/React.png)](https://postimg.cc/PLL4g0BF)
[![React.png](https://i.postimg.cc/9QKGgNMT/React.png)](https://postimg.cc/PCbpPy1r)

### Tips: Mengoptimalkan performa dengan useEffect

[![React.png](https://i.postimg.cc/m2QkWX8C/React.png)](https://postimg.cc/YhCM13cC)
