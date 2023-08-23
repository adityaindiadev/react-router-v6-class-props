# @adityaindiadev/react-router-v6-class-props

A package that provides class component support for React Router v6 and enables navigation with additional props. Now You can navigate to other screens with `data` using the `navigate` method.

## Requirement

React Router v6 must be installed.

## Installation

Install the package using npm:

```sh
npm install @adityaindiadev/react-router-v6-class-props
```

## Usage

1. **Import the `withReactRouterProps` HOC:**

   In your component file, import the `withReactRouterProps` higher-order component:

   ```jsx
   import React from 'react';
   import { withReactRouterProps } from '@adityaindiadev/react-router-v6-class-props';

   class Home extends React.Component {
     // ...
   }

   // Wrap your component using withReactRouterProps
   export default withReactRouterProps(Home);
   ```

2. **Navigate with `Props`:**

   After wrapping your component using withReactRouterProps, you can navigate to other screens with `data` using the `navigate` method:

   ```jsx
   import React from 'react';
   import { withReactRouterProps } from '@adityaindiadev/react-router-v6-class-props';

   class Home extends React.Component {

        navigateToAbout = () => {

            const data = {
                name: "Aditya",
                address: {
                    city: "Delhi",
                    country: "India"
                }
            };
            // Navigate to the '/about' route with additional data
            this.props.navigate('/about', { state: { ...data } });
        }

        render() {
            // ...
        }
   }
   export default withReactRouterProps(Home);
   ```

3. **Access Navigated Data:**

   In the destination component, you can access the passed data using `this.props.location.state`:

   ```jsx
   import React from 'react';
   import { withReactRouterProps } from '@adityaindiadev/react-router-v6-class-props';

    class About extends React.Component {
        render() {
            const { state } = this.props.location;

            // Access the data passed from the previous screen
            // Do something with state...

            return (
            // ...
            );
        }
    }
    export default withReactRouterProps(About);

   ```

## License

MIT

---