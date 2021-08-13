const BotaoDeletar = () => {
    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("delete-button")
    botaoDeletar.innerText = "Deletar";
    botaoDeletar.addEventListener("click", deletarTarefa);

    return botaoDeletar;
}
const deletarTarefa = (event) => {
    const botaoDeletar = event.target;
    const tarefaDeletar = botaoDeletar.parentElement;
    tarefaDeletar.remove();
}

export default BotaoDeletar;