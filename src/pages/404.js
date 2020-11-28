import React from 'react';
import { Redirect } from '@reach/router';
import { RouterPaths } from '../constans/RouterPaths';

const NotFoundPage = () => <Redirect to={RouterPaths.HOME} />;

export default NotFoundPage;
