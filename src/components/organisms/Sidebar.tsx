import { FC, useState } from 'react';
import { SidebarList } from '~/components/organisms/SidebarList';

type Props = {};

export const Sidebar: FC<Props> = (props: Props) => {
  const [url, setUrl] = useState('/home');

  return (
    <div className="sidebar">
      <SidebarList url={url} onClickSidebarListItem={(url) => setUrl(url)} />
    </div>
  );
};
