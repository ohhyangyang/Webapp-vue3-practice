import getAllTeams from "./getAllTeams";

export default async (id) => {
    const teamList = await getAllTeams();
    return teamList.find((team) => team.id == id)
}