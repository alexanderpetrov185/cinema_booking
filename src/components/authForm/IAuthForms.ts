export interface IAuthForms {
  error: string;
  dirty: boolean;
  handleReset: (e?: React.SyntheticEvent<any, Event> | undefined) => void;
  changeAuthType: () => void;
  setModalIsOpen: (arg0: boolean) => void;
}
