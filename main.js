// Função assíncrona para buscar dados de um usuário
async function buscarPerfilGithub(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    console.log(`Buscando dados para: ${username}...`);
    
    const resposta = await fetch(url);

    // Verifica se a requisição foi bem-sucedida (status 200-299)
    if (!resposta.ok) {
      throw new Error(`Usuário não encontrado! Status: ${resposta.status}`);
    }

    const dados = await resposta.json();

    // Exibindo informações relevantes de forma organizada
    console.table({
      Nome: dados.name,
      Bio: dados.bio,
      Seguidores: dados.followers,
      Repositorios: dados.public_repos
    });

  } catch (erro) {
    // Trata erros de rede ou de usuário inexistente
    console.error("Erro ao buscar dados:", erro.message);
  }
}

// Execução do código
buscarPerfilGithub('google');