function copyCode() {
    const code = "WEB-1500-FUTURE";
    navigator.clipboard.writeText(code).then(() => {
      alert("Código copiado: " + code);
    }).catch(err => {
      alert("Erro ao copiar o código!");
    });
  }
  