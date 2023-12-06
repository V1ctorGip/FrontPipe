document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Cria o elemento do formulário
    const form = document.createElement('form');
    form.setAttribute('id', 'meuForm');

    // Adicione esta função para enviar os dados para o servidor
    async function sendDataToServer(nome, email) {
        const response = await fetch('http://localhost:3001/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email })
        });

        if (response.ok) {
            alert('Dados enviados com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar os dados.');
        }
    }

    // Cria o rótulo e o campo de texto "Nome"
    const nomeLabel = document.createElement('label');
    nomeLabel.setAttribute('for', 'nome');
    nomeLabel.textContent = 'Nome:';
    const nomeInput = document.createElement('input');
    nomeInput.setAttribute('type', 'text');
    nomeInput.setAttribute('id', 'nome');
    nomeInput.setAttribute('name', 'nome');

    // Cria o rótulo e o campo de texto "E-mail"
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-mail:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');

    // Cria o botão de envio
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';

    // Adiciona os elementos ao formulário
    form.appendChild(nomeLabel);
    form.appendChild(nomeInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Adiciona o formulário ao elemento "app"
    app.appendChild(form);

    // Adiciona um ouvinte de evento para lidar com o envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();

        if (nome && email) {
            sendDataToServer(nome, email);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});