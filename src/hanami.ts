const completionSpec: Fig.Spec = {
  name: "hanami",
  description: "",
  subcommands: [
    {
      name: "console",
      description: "Opens the Hanami Console",
    },
    {
      name: "db",
      description: "Database tools",
      subcommands: [
        {
          name: "create",
          description: "Create database",
        },
        {
          name: "create_migration",
          description: "Create new migration file",
        },
        {
          name: "drop",
          description: "Delete database",
        },
        {
          name: "migrate",
          description: "Migrates database",
        },
        {
          name: "reset",
          description: "Drop, create, and migrate databse",
        },
        {
          name: "rollback",
          description: "Rollback database to a previous migration",
        },
        {
          name: "sample_data",
          description: "Load sample data",
        },
        {
          name: "seed",
          description: "Load seed data",
        },
        {
          name: "setup",
          description: "Setup database",
        },
        {
          name: "structure",
          description: "TODO: Add structure description",
          subcommands: [
            {
              name: "dump",
              description: "Dumps database structure to db/structure.sql file",
            },
          ],
        },
        {
          name: "version",
          description: "Print schema version",
        },
      ],
    },
    {
      name: "version",
      description: "Prints the installed version of Hanami",
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
