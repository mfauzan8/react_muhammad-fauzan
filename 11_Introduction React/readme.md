## REACT

Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile.

### Virtual DOM

Representasi dari UI berbentuk javascript object yang disimpan pada memori.

State Change -> Compute Diff -> Re-render

contoh :

- Penggunaan V-DOM untuk membuat list dan melakukan perubahan.

```
const vdom = {
    tagName : 'html',
    children: [
     {tagName: "head"},
     {
        tagName: "body",
        children: [
            {
             tagName: "ul",
             attributes: {class : "list"},
             children: [
                {
                 tagName: "li",
                 attributes: {class : "list__item"},
                 textContent: "List Item",
                } //end li
             ]
            } //end ul
        ]
     } //end body
    ]
} // end html
```

- Diff saat terjadi perubahan

```
const diffs = [
    {
        newNode: { /* versi baru dari list item one  */},
        oldNode: { /* versi awal dari list item one  */},
        index: /* index dari element pada list children dari parent */,
    },
    {
        newNode: { /* list item two */},
        index: /* index dari element pada list children dari parent */,
    }
]
```

KET :

- pada differt terdapat list one dan list two.
- react dom akan merender khusus untuk list tersebut.
- kita hanya perlu memanipulasi dom yang berubah.

### Membuat Aplikasi React menggunakan CRA

- install node.js
- Buat aplikasi React dengan perintah :  
  npx create-react-app [nama_project]
- kemudian buka visual studio code dengan perintah :  
  code .
