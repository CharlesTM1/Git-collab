async function executarBusca() {
  const username = document.getElementById('username').value;
  const card = document.getElementById('perfil-card');
  const erroMsg = document.getElementById('erro');

  // Limpa estados anteriores
  erroMsg.innerText = "";
  card.classList.add('hidden');

  if (!username) return alert("Digite um nome!");

  try {
    const resposta = await fetch(`https://api.github.com/users/${username}`);
    
    if (!resposta.ok) throw new Error("Usuário não encontrado");

    const dados = await resposta.json();

    // Preenche os campos do HTML
    document.getElementById('avatar').src = dados.avatar_url;
    document.getElementById('nome').innerText = dados.name || dados.login;
    document.getElementById('bio').innerText = dados.bio || "Sem bio disponível";
    document.getElementById('seguidores').innerText = dados.followers;
    document.getElementById('repos').innerText = dados.public_repos;

    // Mostra o card
    card.classList.remove('hidden');

  } catch (erro) {
    erroMsg.innerText = erro.message;
  }
}