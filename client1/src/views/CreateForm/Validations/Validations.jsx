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
    const durationRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!durationRegex.test(data.duration)) {
      errors.invalidDuration = "Formato de duración inválido.";
    } else {
      const minDuration = "00:05";
      if (data.duration < minDuration) {
        errors.invalidDurationRange = `La duración mínima debe ser ${minDuration} hs.`;
      }
    }
  }

  if (!data.season) {
    errors.noSeason = "Temporada requerida.";
  }

  return errors;
};
