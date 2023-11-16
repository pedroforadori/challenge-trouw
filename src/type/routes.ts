export type NavigationType = {
  navigate: (value: string, object?: object) => void;
};

export type ParamsType = {
  route: {
    params: {
      listIdParam: string;
      titleParam: string;
      descriptionParam: string;
      statusParam: string;
    };
  };
};
