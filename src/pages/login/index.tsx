import { FC } from 'react';

import { DashBoardLayout } from '~/components/Layout/DashBoardLayout';

const Index: FC = () => {
  return (
    <DashBoardLayout>
      <div className="p-3">
        <h1>Login Page</h1>
      </div>
    </DashBoardLayout>

    // <LoginRequiredWrapper>
    // </LoginRequiredWrapper>
  );
};

export default Index;
