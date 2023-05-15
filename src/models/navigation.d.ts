export interface INavigation {
    Name: string,
    Logo: {
        data: {
            attributes: {
                id: number,
                url: string
            }
        }
    },
    NavLink: NavLink[]
}

export interface NavLink {
    id: number,
    name: string,
    route: string
}