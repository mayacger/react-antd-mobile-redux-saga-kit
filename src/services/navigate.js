import history from '../services/history';

export default function navigate(location, method) {
  if (method) {
    switch ( method) {
      case "goBack":
        history.goBack();
        break;
      case "goForward":
        history.goForward();
        break;
      case "replace":
        history.replace(location);
        break;
      case "transitionTo":
        history.transitionTo(location);
        break;
      case "go":
        history.go(location);
        break;
      default:
        history.goBack();
    }

  }else {
    history.push(location);
  }
}
