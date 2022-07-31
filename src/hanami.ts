const completionSpec: Fig.Spec = {
  name: "hanami",
  description: "",
  subcommands: [
    {
      name: "db",
      description: "Switch branches or restore working tree files",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for hanami",
    },
  ],
  // Only uncomment if hanami takes an argument
  // args: {}
};
export default completionSpec;
