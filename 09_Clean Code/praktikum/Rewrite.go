package main

type kendaraan struct{
	totalroda int
	kecepatanperjam int
}

type mobil struct{
	kendaraan
}

func (m *mobil) bergerak(){
	m.tambahkecepatan(10)
}

func (m *mobil) tambahkecepatan(kecepatanbaru int){
	m.kecepatanperjam = m.kecepatanperjam + kecepatanbaru
}

func main(){
	mobilcepat := mobil{}
	mobilcepet.bergerak()
	mobilcepet.bergerak()
	mobilcepet.bergerak()

	mobillambat := mobil{}
	mobillambat.bergerak
}