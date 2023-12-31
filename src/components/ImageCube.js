import './ImageCube.css'

export const ImageCube = props => {
  return (
    <div class="scene">
      <div class="cube">
        <div class="side back"></div>
        <div class="side left"></div>
        <div class="side right"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
        <div class="side front"></div>
      </div>
    </div>
  )
}