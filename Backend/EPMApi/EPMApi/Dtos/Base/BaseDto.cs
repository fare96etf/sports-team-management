using Mapster;

namespace EPMApi.Dtos.Base
{
    public abstract class BaseDto<TEntity, TDto> : IRegister
    where TDto : class, new()
    where TEntity : class, new()
    {
        private TypeAdapterConfig Config { get; set; }

        public virtual void AddCustomMappings() { }

        protected TypeAdapterSetter<TEntity, TDto> SetCustomMappings()
            => Config.ForType<TEntity, TDto>();

        protected TypeAdapterSetter<TDto, TEntity> SetCustomMappingsInverse()
            => Config.ForType<TDto, TEntity>();

        public void Register(TypeAdapterConfig config)
        {
            Config = config;
            AddCustomMappings();
        }
    }
}
