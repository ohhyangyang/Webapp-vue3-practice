import getAllTeams from "./getAllTeams";

export default (id) => {
    const teamList = getAllTeams();
    return teamList.find((team) => team.id == id)
}