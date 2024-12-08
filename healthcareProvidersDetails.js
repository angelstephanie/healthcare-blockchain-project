const mongoose = require("mongoose");

const HealthcareProvidersSchema = new mongoose.Schema(
  {
    title: String,
    pdf: String,
  },
  { collection: "HealthcareProviders" }
);

mongoose.model("HealthcareProviders", HealthcareProvidersSchema);
