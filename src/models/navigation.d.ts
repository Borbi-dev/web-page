export interface INavigation {
    name: string,
    logo: {
        data: {
            attributes: {
                id: number,
                url: string
            }
        }
    },
    navLink: NavLink[]
}

export interface NavLink {
    id: number,
    name: string,
    route: string
}