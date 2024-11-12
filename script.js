// Evento para o envio do formulário de inscrição
document.getElementById('inscricaoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio convencional do formulário

    // Coleta os dados inseridos no formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;

    // Mostra o alerta de confirmação de inscrição
    alert(`Inscrição realizada com sucesso! ${nome}, você está inscrito no evento.`);

    // Mostra a confirmação de inscrição e o botão para gerar o certificado
    document.getElementById('confirmacaoDiv').classList.remove('hidden');
    document.getElementById('gerarCertificado').style.display = 'block';
});

// Evento para gerar o certificado quando o botão for clicado
document.getElementById('gerarCertificado').addEventListener('click', function () {
    // Coleta mais dados para o certificado
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const dataInscricao = new Date().toLocaleDateString('pt-BR'); // Data da inscrição
    const evento = "4ª Conferência TechWave 2025";
    const local = "RIOCENTRO - Rio de Janeiro, Brasil";
    const dataEvento = "20 e 21 de maio, 2025";

    // Cria o documento PDF para o certificado
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurações do PDF (titulo e texto)
    doc.setFontSize(22);
    doc.text('Certificado de Participação', 20, 30);
    doc.setFontSize(16);
    doc.text(`Certificamos que ${nome}`, 20, 50);
    doc.text(`e-mail: ${email}`, 20, 60);
    doc.text(`Telefone: ${numero}`, 20, 70);
    doc.text(`Participou da ${evento}.`, 20, 80);
    doc.text(`O evento aconteceu nos dias ${dataEvento} em ${local}.`, 20, 90);
    doc.text(`Data da Inscrição: ${dataInscricao}`, 20, 100);

    // Adiciona assinatura ou outras informações de credibilidade
    doc.text('Assinatura do Organizador: __________________', 20, 120);

    // Gera e faz o download do certificado em PDF
    doc.save(`${nome}_certificado_${dataInscricao}.pdf`);
});
