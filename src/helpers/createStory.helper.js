export default (component, name, designUrl) => {
  component.story = {
    name: name,
    parameters: {
      design: {
        type: 'figma',
        url: designUrl,
        allowFullscreen: true,
      }
    }
  };

  return component;
}