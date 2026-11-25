window.SITE = {
  nome: "{{NOME}}",

  whatsapp: {
    numero: "{{WHATSAPP_COM_DDI}}", // só dígitos, ex.: 5511999998888
    mensagem: "{{MENSAGEM_WHATSAPP}}",
  },

  contato: {
    email: "{{EMAIL_DESTINO}}",
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "",
    assunto: "Novo contato pelo site {{NOME}}",
  },

  frames: {
    total: 160, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
  },
};
