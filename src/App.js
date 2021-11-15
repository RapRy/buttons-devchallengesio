import React from "react";
import "./_app.css";

import Button from "./Button";

const App = () => {
  return (
    <div>
      <p>variant default</p>
      <Button />
      <p>variant outline</p>
      <Button variant="outline" color="primary" />
      <p>variant text</p>
      <Button variant="text" color="primary" />
      <p>shadow disabled</p>
      <Button variant="default" color="primary" disableShadow />
      <p>disabled button</p>
      <Button variant="default" color="default" disabled />
      <p>disabled text button</p>
      <Button variant="text" color="default" disabled />
      <p>start icon</p>
      <Button
        variant="default"
        color="primary"
        startIcon="local_grocery_store"
      />
      <p>end icon</p>
      <Button variant="default" color="primary" endIcon="local_grocery_store" />
      <p>small button</p>
      <Button variant="default" color="primary" size="sm" />
      <p>medium button</p>
      <Button variant="default" color="primary" size="md" />
      <p>large button</p>
      <Button variant="default" color="primary" size="lg" />
      <p>default color</p>
      <Button color="default" />
      <p>primary color</p>
      <Button color="primary" />
      <p>secondary color</p>
      <Button color="secondary" />
      <p>danger color</p>
      <Button color="danger" />
      <p>submitted by ralph</p>
    </div>
  );
};

export default App;
