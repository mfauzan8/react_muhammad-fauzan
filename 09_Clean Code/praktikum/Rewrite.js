class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void bergerak(){
        tambahkecepatan(10);
    }
        
    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main(){
    mobilcepat = new mobil();
    mobilcepat.bergerak();
    mobilcepat.bergerak();
    mobilcepat.bergerak();

    mobillamban = new mobil();
    mobillamban.bergerak();
}