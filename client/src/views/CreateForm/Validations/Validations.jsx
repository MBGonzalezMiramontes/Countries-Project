export default (data) => {
  const errors = {};

  if (!data.name) {
    errors.noName = "Nombre requerido.";
  } else if (data.name.length < 3 || data.name.length > 100) {
    errors.nameLength = "Debe tener entre 3 y 100 caracteres.";
  }

  if (!data.difficulty) {
    errors.nodifficulty = "Dificultad requerida;";
  } else if (data.difficulty < 1 || data.difficulty > 5) {
    errors.difficultyLength = "Indicar dificultad mínima 1 o máxima 5.";
  }

  if (data.duration) {
    const durationRegex = /^([0-8]?[0-9]|9[0-6]):([0-5][0-9])$/;
    if (!durationRegex.test(data.duration)) {
      errors.invalidDuration =
        "Formato de duración inválido. Debe ser HH:MM, entre el rango 00:05 y 96:00";
    } else {
      const minDuration = "00:05";
      const maxDuration = "96:00";
      if (data.duration < minDuration || data.duration > maxDuration) {
        errors.invalidDurationRange = `La duración debe estar entre ${minDuration} minutos y ${maxDuration} horas.`;
      }
    }
  }

  if (!data.season) {
    errors.noSeason = "Temporada requerida.";
  } else {
    const validSeasons = ["Verano", "Otoño", "Invierno", "Primavera"];
    if (!validSeasons.includes(data.season)) {
      errors.invalidSeason =
        "Temporada inválida. Debe ser Verano, Otoño, Invierno o Primavera.";
    }
  }

  return errors;
};
