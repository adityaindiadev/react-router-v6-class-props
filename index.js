import React, { Component } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const withReactRouterProps = (Component) => {
    return props => <Component {...props} location={useLocation()} navigate={useNavigate()} />;
} 