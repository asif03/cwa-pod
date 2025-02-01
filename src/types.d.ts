interface INavItem {
  id: number;
  title: string;
  url: (cid: number) => string;
}

interface ICompany {
  id: number;
  companyName: string;
  description: string;
  logo: string;
  isConnected: boolean;
}

interface INavMenu {
  id: number;
  title: string;
  url: (cid: number) => string;
}
