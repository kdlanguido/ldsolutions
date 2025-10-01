import 'd3-org-chart';

declare module 'd3-org-chart' {
    interface OrgChart {
        container(container: string | HTMLElement): this;
    }
}
