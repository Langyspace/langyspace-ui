export interface RecordedAudioLine {
  id: string
  text: string
}
export interface PreparedRecording extends RecordedAudioLine {
  src: string
}
