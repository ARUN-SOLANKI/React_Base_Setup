/**
 * Generates a unique ID with an optional prefix.
 * @param {string} [prefix=''] - An optional prefix to add to the generated ID.
 * @returns {string} - The unique ID with the prefix.
 */
export function generateUniqueId(prefix = '') {
  // Ensure prefix is a string and does not contain spaces or special characters
  const sanitizedPrefix = prefix.replace(/[^a-zA-Z0-9]/g, '')

  // Get the current timestamp
  const timestamp = new Date().getTime()

  // Generate a random number and convert it to a base-36 string
  const randomNum = Math.random().toString(36).substr(2, 9)

  // Combine prefix, timestamp, and random number
  return `${sanitizedPrefix}-${timestamp}-${randomNum}`
}
