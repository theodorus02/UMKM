function pesan(paket){
  const nomor = "6281377033153"; // ganti nomor kamu
  const text = `Halo, saya tertarik dengan ${paket}. Mohon info lebih lanjut.`;
  window.location.href =
    "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
}
