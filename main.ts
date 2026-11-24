// Entri ini menang di nada, bukan di kata-kata pintar.
// Barisnya dibuka seperti pesan error mesin sungguhan — kode "ERROR 04"
// plus "BREAD NOT FOUND" yang datar dan literal — supaya pembaca
// membayangkan toaster yang serius melaporkan kegagalan, bukan pelawak
// yang sedang berusaha lucu. Punch-nya ada di ekor kalimat:
// "lower your expectations for breakfast" membalikkan masalah dari
// mesin ke pemiliknya, tanpa perlu permainan kata yang gampang ditebak
// soal roti gosong. Satu baris, tanpa embel-embel, biar bunyinya
// seperti sesuatu yang benar-benar tercetak di layar toaster —
// dan seperti toaster itu sudah menyerah duluan.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR 04: BREAD NOT FOUND. Please insert bread, or lower your expectations for breakfast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
