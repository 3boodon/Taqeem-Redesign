/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'Requests',
        title: 'Requests',
        subtitle: 'Requests Related Options',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Previous Requests',
                title: 'Previous Requests',
                type: 'basic',
                icon: 'feather:codesandbox',
                link: '/requests/history',
            },
            {
                id: 'New Request',
                title: 'New Request',
                type: 'basic',
                icon: 'feather:upload-cloud',
                link: '/requests/new',
            },
        ],
    },
    {
        id: 'Account',
        title: 'Account',
        subtitle: 'Account Related Options',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Profile',
                title: 'Profile',
                type: 'basic',
                icon: 'feather:user',
                link: '/profile',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
