# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Oskar Cheński i Marysia Chałupa
**Klasa:** 3 Technikum
**Data:** 19.03.2026

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
* Wybór sprzętu (Kajak, Rower, Omega) wraz z dodatkami (kapok, instruktor).
* Cena musi uwzględniać stawkę godzinową sprzętu oraz dodatki płatne jednorazowo lub za godzinę.
* Blokada rezerwacji w przypadku braku imienia lub niezaakceptowania regulaminu.
* Jasne ostrzeżenie o wymaganym patencie przy wyborze jachtu "Omega".

---
## 2. Architektura rozwiązania
(Wyjaśnij, dlaczego zdecydowaliście się na jeden komponent App.ts i
 jak podzieliliście w nim kod na sekcje).
 * staete'y: Tu trzymamy informacje o tym co użytkownik klika.
 * logika: Funkcje, które liczą cenę i sprawdzają czy formularz jest dobrze wypełniony.
 * Wygląd (HTML/CSS): To co użytkownik widzi na ekranie.

---
## 3. Zarządzanie stanem (`useState`)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
| imie | string | Przechowuje tekst wpisany przez użytkownika. |
| sprzet | sprzet | przechowuje wybor sprzetu ogrnaiczony do kajak, rower lub omega
| godziny | number | przechwouje ilość godzin wybrana z suwaka przez użytkonwika |
| kapok | boolean | przechowuje czy użytkownik zaznaczył kapok (true/false) |
| instruktor | boolean | przechowuje czy użytkownik wybrał instruktora (true/false) |
| platnosc | string | Przechowuje wybraną metodę płatności (Karta/Blik) |
| regulamin | boolean | przechowuje czy użytkownik zaznaczył czy zgadza sie z regulaminem (true/false) |
| finalnaCena | number | przechowuje wynik obliczen finalnej ceny użytkownika |

---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

* Program sprawdza stan sprzet w którym przypisane są ceny do konkretnego sprzetu
* Mnożymy stawkę za sprzet przez liczbę godzin ze stanu godziny.
* Jeśli stan instruktor to true doliczamy 50 zł za każdą godzinę.
* Jeśli stan kapok to true doliczamy jednorazową opłatę 5 zł niezależnie od czasu.
* Wynik jest zapisywany do stanu finalnaCena i wyświetlany w sekcji podsumowania.

---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. display: flex - Pozwoliło ustawić sekcję "Oferta" i "Formularz" obok siebie
2. flex-direction: column - Dzięki temu wszystkie pola formularza: imię, wybór sprzętu, suwak układają się jedno pod drugim
3. justify-content: center - Aby cała aplikacja była idealnie wyśrodkowana w oknie przeglądarki
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** Zrozumienie logiki działania handlerów ale już rozumiem
* **Czego nowego się nauczyliście?** Jak działają handlery
* **Co byście zmienili, gdybyście mieli więcej czasu?** [WPISZ TUTAJ]
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.

```
