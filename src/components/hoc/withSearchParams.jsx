import { useSearchParams } from "react-router-dom";

export function withSearchParams(Component) {
  return (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        {...props}
      />
    );
  };
}

/*
## Usage:

```js
let value = searchParams.get("key");
```

*/
