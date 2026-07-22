
  import { Effect, Schema, SchemaTransformation, Struct } from "effect";

// <DefaultSchemas>
const Boolean_default_false_prop = Schema.Boolean.pipe(Schema.withDecodingDefaultType(Effect.succeed(false)));
const Int_default_0_prop = Schema.Int.pipe(Schema.withDecodingDefaultType(Effect.succeed(0)));
const Boolean_default_true_prop = Schema.Boolean.pipe(Schema.withDecodingDefaultType(Effect.succeed(true)));
const NullOr_default_false_prop = Schema.NullOr(Schema.Boolean).pipe(Schema.withDecodingDefaultType(Effect.succeed(false)));
const Schema_default_single_prop = Schema.Literals(["single", "multi"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("single")));
const Schema_default_none_prop = Schema.Literals(["none", "readonly", "onewriter", "all"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("none")));
const Schema_default_active_prop = Schema.Literals(["active", "pause", "drain"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("active")));
const Int_default_neg_1_prop = Schema.Int.pipe(Schema.withDecodingDefaultType(Effect.succeed(-1)));
const Schema_default_local_prop = Schema.Literals(["local", "global"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("local")));
const String_default_local_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("local")));
const String_default_default_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("default")));
const Schema_default_ingress_prop = Schema.Literals(["ingress", "host"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("ingress")));
const Schema_default_vip_prop = Schema.Literals(["vip", "dnsrr"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("vip")));
const Int_default_1_prop = Schema.Int.pipe(Schema.withDecodingDefaultType(Effect.succeed(1)));
const Schema_default_value = Schema.Literals(["", "inactive", "pending", "active", "error", "locked"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("")));
const String_default_value_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("")));
const Schema_default_cgroupfs_prop = Schema.Literals(["cgroupfs", "systemd", "none"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("cgroupfs")));
const Schema_default_1_prop = Schema.Literals(["1", "2"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("1")));
const String_default_https_index_docker_io_v1_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("https://index.docker.io/v1/")));
const String_default_runc_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("runc")));
const Schema_default_default_prop = Schema.Literals(["default", "hyperv", "process"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("default")));
const Union_default_false_prop = Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a }))).pipe(Schema.withDecodingDefaultType(Effect.succeed(false)));
const String_default_neg_ef_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("-ef")));
const Schema_default_0_prop = Schema.NumberFromString.check(Schema.isInt()).pipe(Schema.withDecodingDefaultType(Effect.succeed(0)));
const String_default_all_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("all")));
const Union_default_true_prop = Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a }))).pipe(Schema.withDecodingDefaultType(Effect.succeed(true)));
const String_default_SIGKILL_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("SIGKILL")));
const Schema_default_notneg_running_prop = Schema.Literals(["not-running", "next-exit", "removed"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("not-running")));
const String_default_Dockerfile_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("Dockerfile")));
const Schema_default_inactive_prop = Schema.Literals(["inactive", "pending", "error", "locked", "active/worker", "active/manager"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("inactive")));
const String_default_noneg_cache_noneg_store_mustneg_revalida_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("no-cache, no-store, must-revalidate")));
const String_default_noneg_cache_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("no-cache")));
const String_default_2_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("2")));
const String_default_bridge_prop = Schema.String.pipe(Schema.withDecodingDefaultType(Effect.succeed("bridge")));
const Schema_default_spec_prop = Schema.Literals(["spec", "previous-spec"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("spec")));

// </DefaultSchemas>

// <Schemas>
export const Port = Schema.Struct({ IP: Schema.optional(Schema.String), PrivatePort: Schema.Int, PublicPort: Schema.optional(Schema.Int), Type: Schema.Literals(["tcp", "udp", "sctp"]) });
export type Port = Schema.Schema.Type<typeof Port>;

export const MountPoint = Schema.Struct({ Type: Schema.optional(Schema.Literals(["bind", "volume", "tmpfs", "npipe", "cluster"])), Name: Schema.optional(Schema.String), Source: Schema.optional(Schema.String), Destination: Schema.optional(Schema.String), Driver: Schema.optional(Schema.String), Mode: Schema.optional(Schema.String), RW: Schema.optional(Schema.Boolean), Propagation: Schema.optional(Schema.String) });
export type MountPoint = Schema.Schema.Type<typeof MountPoint>;

export const DeviceMapping = Schema.Struct({ PathOnHost: Schema.optional(Schema.String), PathInContainer: Schema.optional(Schema.String), CgroupPermissions: Schema.optional(Schema.String) });
export type DeviceMapping = Schema.Schema.Type<typeof DeviceMapping>;

export const DeviceRequest = Schema.Struct({ Driver: Schema.optional(Schema.String), Count: Schema.optional(Schema.Int), DeviceIDs: Schema.optional(Schema.Array(Schema.String)), Capabilities: Schema.optional(Schema.Array(Schema.Array(Schema.String))), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type DeviceRequest = Schema.Schema.Type<typeof DeviceRequest>;

export const ThrottleDevice = Schema.Struct({ Path: Schema.optional(Schema.String), Rate: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))) });
export type ThrottleDevice = Schema.Schema.Type<typeof ThrottleDevice>;

export const Mount = Schema.Struct({ Target: Schema.optional(Schema.String), Source: Schema.optional(Schema.String), Type: Schema.optional(Schema.Literals(["bind", "volume", "tmpfs", "npipe", "cluster"])), ReadOnly: Schema.optional(Schema.Boolean), Consistency: Schema.optional(Schema.String), BindOptions: Schema.optional(Schema.Struct({ Propagation: Schema.optional(Schema.Literals(["private", "rprivate", "shared", "rshared", "slave", "rslave"])), NonRecursive: Boolean_default_false_prop, CreateMountpoint: Boolean_default_false_prop })), VolumeOptions: Schema.optional(Schema.Struct({ NoCopy: Boolean_default_false_prop, Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), DriverConfig: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) })) })), TmpfsOptions: Schema.optional(Schema.Struct({ SizeBytes: Schema.optional(Schema.Int), Mode: Schema.optional(Schema.Int) })) });
export type Mount = Schema.Schema.Type<typeof Mount>;

export const RestartPolicy = Schema.Struct({ Name: Schema.optional(Schema.Literals(["", "no", "always", "unless-stopped", "on-failure"])), MaximumRetryCount: Schema.optional(Schema.Int) });
export type RestartPolicy = Schema.Schema.Type<typeof RestartPolicy>;

export const Resources = Schema.Struct({ CpuShares: Schema.optional(Schema.Int), Memory: Int_default_0_prop, CgroupParent: Schema.optional(Schema.String), BlkioWeight: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(1000))), BlkioWeightDevice: Schema.optional(Schema.Array(Schema.Struct({ Path: Schema.optional(Schema.String), Weight: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))) }))), BlkioDeviceReadBps: Schema.optional(Schema.Array(ThrottleDevice)), BlkioDeviceWriteBps: Schema.optional(Schema.Array(ThrottleDevice)), BlkioDeviceReadIOps: Schema.optional(Schema.Array(ThrottleDevice)), BlkioDeviceWriteIOps: Schema.optional(Schema.Array(ThrottleDevice)), CpuPeriod: Schema.optional(Schema.Int), CpuQuota: Schema.optional(Schema.Int), CpuRealtimePeriod: Schema.optional(Schema.Int), CpuRealtimeRuntime: Schema.optional(Schema.Int), CpusetCpus: Schema.optional(Schema.String), CpusetMems: Schema.optional(Schema.String), Devices: Schema.optional(Schema.Array(DeviceMapping)), DeviceCgroupRules: Schema.optional(Schema.Array(Schema.String)), DeviceRequests: Schema.optional(Schema.Array(DeviceRequest)), KernelMemoryTCP: Schema.optional(Schema.Int), MemoryReservation: Schema.optional(Schema.Int), MemorySwap: Schema.optional(Schema.Int), MemorySwappiness: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(100))), NanoCpus: Schema.optional(Schema.Int), OomKillDisable: Schema.optional(Schema.Boolean), Init: Schema.optional(Schema.NullOr(Schema.Boolean)), PidsLimit: Schema.optional(Schema.NullOr(Schema.Int)), Ulimits: Schema.optional(Schema.Array(Schema.Struct({ Name: Schema.optional(Schema.String), Soft: Schema.optional(Schema.Int), Hard: Schema.optional(Schema.Int) }))), CpuCount: Schema.optional(Schema.Int), CpuPercent: Schema.optional(Schema.Int), IOMaximumIOps: Schema.optional(Schema.Int), IOMaximumBandwidth: Schema.optional(Schema.Int) });
export type Resources = Schema.Schema.Type<typeof Resources>;

export const Limit = Schema.Struct({ NanoCPUs: Schema.optional(Schema.Int), MemoryBytes: Schema.optional(Schema.Int), Pids: Int_default_0_prop });
export type Limit = Schema.Schema.Type<typeof Limit>;

export const GenericResources = Schema.Array(Schema.Struct({ NamedResourceSpec: Schema.optional(Schema.Struct({ Kind: Schema.optional(Schema.String), Value: Schema.optional(Schema.String) })), DiscreteResourceSpec: Schema.optional(Schema.Struct({ Kind: Schema.optional(Schema.String), Value: Schema.optional(Schema.Int) })) }));
export type GenericResources = Schema.Schema.Type<typeof GenericResources>;

export const ResourceObject = Schema.Struct({ NanoCPUs: Schema.optional(Schema.Int), MemoryBytes: Schema.optional(Schema.Int), GenericResources: Schema.optional(GenericResources) });
export type ResourceObject = Schema.Schema.Type<typeof ResourceObject>;

export const HealthConfig = Schema.Struct({ Test: Schema.optional(Schema.Array(Schema.String)), Interval: Schema.optional(Schema.Int), Timeout: Schema.optional(Schema.Int), Retries: Schema.optional(Schema.Int), StartPeriod: Schema.optional(Schema.Int) });
export type HealthConfig = Schema.Schema.Type<typeof HealthConfig>;

export const HealthcheckResult = Schema.Struct({ Start: Schema.optional(Schema.String), End: Schema.optional(Schema.String), ExitCode: Schema.optional(Schema.Int), Output: Schema.optional(Schema.String) });
export type HealthcheckResult = Schema.Schema.Type<typeof HealthcheckResult> | null;

export const Health = Schema.Struct({ Status: Schema.optional(Schema.Literals(["none", "starting", "healthy", "unhealthy"])), FailingStreak: Schema.optional(Schema.Int), Log: Schema.optional(Schema.Array(HealthcheckResult)) });
export type Health = Schema.Schema.Type<typeof Health> | null;

export const PortBinding = Schema.Struct({ HostIp: Schema.optional(Schema.String), HostPort: Schema.optional(Schema.String) });
export type PortBinding = Schema.Schema.Type<typeof PortBinding>;

export const PortMap = Schema.Record(Schema.String, Schema.NullOr(Schema.Array(PortBinding)));
export type PortMap = Schema.Schema.Type<typeof PortMap>;

export const HostConfig = Resources.mapFields(Struct.assign((Schema.Struct({ Binds: Schema.optional(Schema.Array(Schema.String)), ContainerIDFile: Schema.optional(Schema.String), LogConfig: Schema.optional(Schema.Struct({ Type: Schema.optional(Schema.Literals(["json-file", "syslog", "journald", "gelf", "fluentd", "awslogs", "splunk", "etwlogs", "none"])), Config: Schema.optional(Schema.Record(Schema.String, Schema.String)) })), NetworkMode: Schema.optional(Schema.String), PortBindings: Schema.optional(PortMap), RestartPolicy: Schema.optional(RestartPolicy), AutoRemove: Schema.optional(Schema.Boolean), VolumeDriver: Schema.optional(Schema.String), VolumesFrom: Schema.optional(Schema.Array(Schema.String)), Mounts: Schema.optional(Schema.Array(Mount)), ConsoleSize: Schema.optional(Schema.NullOr(Schema.Array(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))).check(Schema.isMinLength(2), Schema.isMaxLength(2)))), Annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)), CapAdd: Schema.optional(Schema.Array(Schema.String)), CapDrop: Schema.optional(Schema.Array(Schema.String)), CgroupnsMode: Schema.optional(Schema.Literals(["private", "host"])), Dns: Schema.optional(Schema.Array(Schema.String)), DnsOptions: Schema.optional(Schema.Array(Schema.String)), DnsSearch: Schema.optional(Schema.Array(Schema.String)), ExtraHosts: Schema.optional(Schema.Array(Schema.String)), GroupAdd: Schema.optional(Schema.Array(Schema.String)), IpcMode: Schema.optional(Schema.String), Cgroup: Schema.optional(Schema.String), Links: Schema.optional(Schema.Array(Schema.String)), OomScoreAdj: Schema.optional(Schema.Int), PidMode: Schema.optional(Schema.String), Privileged: Schema.optional(Schema.Boolean), PublishAllPorts: Schema.optional(Schema.Boolean), ReadonlyRootfs: Schema.optional(Schema.Boolean), SecurityOpt: Schema.optional(Schema.Array(Schema.String)), StorageOpt: Schema.optional(Schema.Record(Schema.String, Schema.String)), Tmpfs: Schema.optional(Schema.Record(Schema.String, Schema.String)), UTSMode: Schema.optional(Schema.String), UsernsMode: Schema.optional(Schema.String), ShmSize: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))), Sysctls: Schema.optional(Schema.Record(Schema.String, Schema.String)), Runtime: Schema.optional(Schema.String), Isolation: Schema.optional(Schema.Literals(["default", "process", "hyperv"])), MaskedPaths: Schema.optional(Schema.Array(Schema.String)), ReadonlyPaths: Schema.optional(Schema.Array(Schema.String)) })).fields));
export type HostConfig = Schema.Schema.Type<typeof HostConfig>;

export const ContainerConfig = Schema.Struct({ Hostname: Schema.optional(Schema.String), Domainname: Schema.optional(Schema.String), User: Schema.optional(Schema.String), AttachStdin: Boolean_default_false_prop, AttachStdout: Boolean_default_true_prop, AttachStderr: Boolean_default_true_prop, ExposedPorts: Schema.optional(Schema.NullOr(Schema.Record(Schema.String, Schema.Struct({  })))), Tty: Boolean_default_false_prop, OpenStdin: Boolean_default_false_prop, StdinOnce: Boolean_default_false_prop, Env: Schema.optional(Schema.Array(Schema.String)), Cmd: Schema.optional(Schema.Array(Schema.String)), Healthcheck: Schema.optional(HealthConfig), ArgsEscaped: NullOr_default_false_prop, Image: Schema.optional(Schema.String), Volumes: Schema.optional(Schema.Record(Schema.String, Schema.Struct({  }))), WorkingDir: Schema.optional(Schema.String), Entrypoint: Schema.optional(Schema.Array(Schema.String)), NetworkDisabled: Schema.optional(Schema.NullOr(Schema.Boolean)), MacAddress: Schema.optional(Schema.NullOr(Schema.String)), OnBuild: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), StopSignal: Schema.optional(Schema.NullOr(Schema.String)), StopTimeout: Schema.optional(Schema.NullOr(Schema.Int)), Shell: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))) });
export type ContainerConfig = Schema.Schema.Type<typeof ContainerConfig>;

export const EndpointIPAMConfig = Schema.Struct({ IPv4Address: Schema.optional(Schema.String), IPv6Address: Schema.optional(Schema.String), LinkLocalIPs: Schema.optional(Schema.Array(Schema.String)) });
export type EndpointIPAMConfig = Schema.Schema.Type<typeof EndpointIPAMConfig> | null;

export const EndpointSettings = Schema.Struct({ IPAMConfig: Schema.optional(EndpointIPAMConfig), Links: Schema.optional(Schema.Array(Schema.String)), Aliases: Schema.optional(Schema.Array(Schema.String)), NetworkID: Schema.optional(Schema.String), EndpointID: Schema.optional(Schema.String), Gateway: Schema.optional(Schema.String), IPAddress: Schema.optional(Schema.String), IPPrefixLen: Schema.optional(Schema.Int), IPv6Gateway: Schema.optional(Schema.String), GlobalIPv6Address: Schema.optional(Schema.String), GlobalIPv6PrefixLen: Schema.optional(Schema.Int), MacAddress: Schema.optional(Schema.String), DriverOpts: Schema.optional(Schema.NullOr(Schema.Record(Schema.String, Schema.String))) });
export type EndpointSettings = Schema.Schema.Type<typeof EndpointSettings>;

export const NetworkingConfig = Schema.Struct({ EndpointsConfig: Schema.optional(Schema.Record(Schema.String, EndpointSettings)) });
export type NetworkingConfig = Schema.Schema.Type<typeof NetworkingConfig>;

export const Address = Schema.Struct({ Addr: Schema.optional(Schema.String), PrefixLen: Schema.optional(Schema.Int) });
export type Address = Schema.Schema.Type<typeof Address>;

export const NetworkSettings = Schema.Struct({ Bridge: Schema.optional(Schema.String), SandboxID: Schema.optional(Schema.String), HairpinMode: Schema.optional(Schema.Boolean), LinkLocalIPv6Address: Schema.optional(Schema.String), LinkLocalIPv6PrefixLen: Schema.optional(Schema.Int), Ports: Schema.optional(PortMap), SandboxKey: Schema.optional(Schema.String), SecondaryIPAddresses: Schema.optional(Schema.NullOr(Schema.Array(Address))), SecondaryIPv6Addresses: Schema.optional(Schema.NullOr(Schema.Array(Address))), EndpointID: Schema.optional(Schema.String), Gateway: Schema.optional(Schema.String), GlobalIPv6Address: Schema.optional(Schema.String), GlobalIPv6PrefixLen: Schema.optional(Schema.Int), IPAddress: Schema.optional(Schema.String), IPPrefixLen: Schema.optional(Schema.Int), IPv6Gateway: Schema.optional(Schema.String), MacAddress: Schema.optional(Schema.String), Networks: Schema.optional(Schema.Record(Schema.String, EndpointSettings)) });
export type NetworkSettings = Schema.Schema.Type<typeof NetworkSettings>;

export const GraphDriverData = Schema.Struct({ Name: Schema.String, Data: Schema.Record(Schema.String, Schema.String) });
export type GraphDriverData = Schema.Schema.Type<typeof GraphDriverData>;

export const ChangeType = Schema.Literals([0, 1, 2]);
export type ChangeType = Schema.Schema.Type<typeof ChangeType>;

export const FilesystemChange = Schema.Struct({ Path: Schema.String, Kind: ChangeType });
export type FilesystemChange = Schema.Schema.Type<typeof FilesystemChange>;

export const ImageInspect = Schema.Struct({ Id: Schema.optional(Schema.String), RepoTags: Schema.optional(Schema.Array(Schema.String)), RepoDigests: Schema.optional(Schema.Array(Schema.String)), Parent: Schema.optional(Schema.String), Comment: Schema.optional(Schema.String), Created: Schema.optional(Schema.String), Container: Schema.optional(Schema.String), ContainerConfig: Schema.optional(ContainerConfig), DockerVersion: Schema.optional(Schema.String), Author: Schema.optional(Schema.String), Config: Schema.optional(ContainerConfig), Architecture: Schema.optional(Schema.String), Variant: Schema.optional(Schema.NullOr(Schema.String)), Os: Schema.optional(Schema.String), OsVersion: Schema.optional(Schema.NullOr(Schema.String)), Size: Schema.optional(Schema.Int), VirtualSize: Schema.optional(Schema.Int), GraphDriver: Schema.optional(GraphDriverData), RootFS: Schema.optional(Schema.Struct({ Type: Schema.String, Layers: Schema.optional(Schema.Array(Schema.String)) })), Metadata: Schema.optional(Schema.Struct({ LastTagTime: Schema.optional(Schema.NullOr(Schema.String)) })) });
export type ImageInspect = Schema.Schema.Type<typeof ImageInspect>;

export const ImageSummary = Schema.Struct({ Id: Schema.String, ParentId: Schema.String, RepoTags: Schema.Array(Schema.String), RepoDigests: Schema.Array(Schema.String), Created: Schema.Int, Size: Schema.Int, SharedSize: Schema.Int, VirtualSize: Schema.optional(Schema.Int), Labels: Schema.Record(Schema.String, Schema.String), Containers: Schema.Int });
export type ImageSummary = Schema.Schema.Type<typeof ImageSummary>;

export const AuthConfig = Schema.Struct({ username: Schema.optional(Schema.String), password: Schema.optional(Schema.String), email: Schema.optional(Schema.String), serveraddress: Schema.optional(Schema.String) });
export type AuthConfig = Schema.Schema.Type<typeof AuthConfig>;

export const ProcessConfig = Schema.Struct({ privileged: Schema.optional(Schema.Boolean), user: Schema.optional(Schema.String), tty: Schema.optional(Schema.Boolean), entrypoint: Schema.optional(Schema.String), arguments: Schema.optional(Schema.Array(Schema.String)) });
export type ProcessConfig = Schema.Schema.Type<typeof ProcessConfig>;

export const ObjectVersion = Schema.Struct({ Index: Schema.optional(Schema.Int) });
export type ObjectVersion = Schema.Schema.Type<typeof ObjectVersion>;

export const Topology = Schema.Record(Schema.String, Schema.String);
export type Topology = Schema.Schema.Type<typeof Topology>;

export const ClusterVolumeSpec = Schema.Struct({ Group: Schema.optional(Schema.String), AccessMode: Schema.optional(Schema.Struct({ Scope: Schema_default_single_prop, Sharing: Schema_default_none_prop, MountVolume: Schema.optional(Schema.Struct({  })), Secrets: Schema.optional(Schema.Array(Schema.Struct({ Key: Schema.optional(Schema.String), Secret: Schema.optional(Schema.String) }))), AccessibilityRequirements: Schema.optional(Schema.Struct({ Requisite: Schema.optional(Schema.Array(Topology)), Preferred: Schema.optional(Schema.Array(Topology)) })), CapacityRange: Schema.optional(Schema.Struct({ RequiredBytes: Schema.optional(Schema.Int), LimitBytes: Schema.optional(Schema.Int) })), Availability: Schema_default_active_prop })) });
export type ClusterVolumeSpec = Schema.Schema.Type<typeof ClusterVolumeSpec>;

export const ClusterVolume = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(ClusterVolumeSpec), Info: Schema.optional(Schema.Struct({ CapacityBytes: Schema.optional(Schema.Int), VolumeContext: Schema.optional(Schema.Record(Schema.String, Schema.String)), VolumeID: Schema.optional(Schema.String), AccessibleTopology: Schema.optional(Schema.Array(Topology)) })), PublishStatus: Schema.optional(Schema.Array(Schema.Struct({ NodeID: Schema.optional(Schema.String), State: Schema.optional(Schema.Literals(["pending-publish", "published", "pending-node-unpublish", "pending-controller-unpublish"])), PublishContext: Schema.optional(Schema.Record(Schema.String, Schema.String)) }))) });
export type ClusterVolume = Schema.Schema.Type<typeof ClusterVolume>;

export const Volume = Schema.Struct({ Name: Schema.String, Driver: Schema.String, Mountpoint: Schema.String, CreatedAt: Schema.optional(Schema.String), Status: Schema.optional(Schema.Record(Schema.String, Schema.Struct({  }))), Labels: Schema.Record(Schema.String, Schema.String), Scope: Schema_default_local_prop, ClusterVolume: Schema.optional(ClusterVolume), Options: Schema.Record(Schema.String, Schema.String), UsageData: Schema.optional(Schema.NullOr(Schema.Struct({ Size: Int_default_neg_1_prop, RefCount: Int_default_neg_1_prop }))) });
export type Volume = Schema.Schema.Type<typeof Volume>;

export const VolumeCreateOptions = Schema.Struct({ Name: Schema.optional(Schema.String), Driver: String_default_local_prop, DriverOpts: Schema.optional(Schema.Record(Schema.String, Schema.String)), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), ClusterVolumeSpec: Schema.optional(ClusterVolumeSpec) });
export type VolumeCreateOptions = Schema.Schema.Type<typeof VolumeCreateOptions>;

export const VolumeListResponse = Schema.Struct({ Volumes: Schema.optional(Schema.Array(Volume)), Warnings: Schema.optional(Schema.Array(Schema.String)) });
export type VolumeListResponse = Schema.Schema.Type<typeof VolumeListResponse>;

export const IPAMConfig = Schema.Struct({ Subnet: Schema.optional(Schema.String), IPRange: Schema.optional(Schema.String), Gateway: Schema.optional(Schema.String), AuxiliaryAddresses: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type IPAMConfig = Schema.Schema.Type<typeof IPAMConfig>;

export const IPAM = Schema.Struct({ Driver: String_default_default_prop, Config: Schema.optional(Schema.Array(IPAMConfig)), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type IPAM = Schema.Schema.Type<typeof IPAM>;

export const NetworkContainer = Schema.Struct({ Name: Schema.optional(Schema.String), EndpointID: Schema.optional(Schema.String), MacAddress: Schema.optional(Schema.String), IPv4Address: Schema.optional(Schema.String), IPv6Address: Schema.optional(Schema.String) });
export type NetworkContainer = Schema.Schema.Type<typeof NetworkContainer>;

export const Network = Schema.Struct({ Name: Schema.optional(Schema.String), Id: Schema.optional(Schema.String), Created: Schema.optional(Schema.String), Scope: Schema.optional(Schema.String), Driver: Schema.optional(Schema.String), EnableIPv6: Schema.optional(Schema.Boolean), IPAM: Schema.optional(IPAM), Internal: Schema.optional(Schema.Boolean), Attachable: Schema.optional(Schema.Boolean), Ingress: Schema.optional(Schema.Boolean), Containers: Schema.optional(Schema.Record(Schema.String, NetworkContainer)), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type Network = Schema.Schema.Type<typeof Network>;

export const ErrorDetail = Schema.Struct({ code: Schema.optional(Schema.Int), message: Schema.optional(Schema.String) });
export type ErrorDetail = Schema.Schema.Type<typeof ErrorDetail>;

export const ProgressDetail = Schema.Struct({ current: Schema.optional(Schema.Int), total: Schema.optional(Schema.Int) });
export type ProgressDetail = Schema.Schema.Type<typeof ProgressDetail>;

export const ImageID = Schema.Struct({ ID: Schema.optional(Schema.String) });
export type ImageID = Schema.Schema.Type<typeof ImageID>;

export const BuildInfo = Schema.Struct({ id: Schema.optional(Schema.String), stream: Schema.optional(Schema.String), error: Schema.optional(Schema.String), errorDetail: Schema.optional(ErrorDetail), status: Schema.optional(Schema.String), progress: Schema.optional(Schema.String), progressDetail: Schema.optional(ProgressDetail), aux: Schema.optional(ImageID) });
export type BuildInfo = Schema.Schema.Type<typeof BuildInfo>;

export const BuildCache = Schema.Struct({ ID: Schema.optional(Schema.String), Parent: Schema.optional(Schema.NullOr(Schema.String)), Parents: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), Type: Schema.optional(Schema.Literals(["internal", "frontend", "source.local", "source.git.checkout", "exec.cachemount", "regular"])), Description: Schema.optional(Schema.String), InUse: Schema.optional(Schema.Boolean), Shared: Schema.optional(Schema.Boolean), Size: Schema.optional(Schema.Int), CreatedAt: Schema.optional(Schema.String), LastUsedAt: Schema.optional(Schema.NullOr(Schema.String)), UsageCount: Schema.optional(Schema.Int) });
export type BuildCache = Schema.Schema.Type<typeof BuildCache>;

export const CreateImageInfo = Schema.Struct({ id: Schema.optional(Schema.String), error: Schema.optional(Schema.String), errorDetail: Schema.optional(ErrorDetail), status: Schema.optional(Schema.String), progress: Schema.optional(Schema.String), progressDetail: Schema.optional(ProgressDetail) });
export type CreateImageInfo = Schema.Schema.Type<typeof CreateImageInfo>;

export const PushImageInfo = Schema.Struct({ error: Schema.optional(Schema.String), status: Schema.optional(Schema.String), progress: Schema.optional(Schema.String), progressDetail: Schema.optional(ProgressDetail) });
export type PushImageInfo = Schema.Schema.Type<typeof PushImageInfo>;

export const ErrorResponse = Schema.Struct({ message: Schema.String });
export type ErrorResponse = Schema.Schema.Type<typeof ErrorResponse>;

export const IdResponse = Schema.Struct({ Id: Schema.String });
export type IdResponse = Schema.Schema.Type<typeof IdResponse>;

export const PluginMount = Schema.Struct({ Name: Schema.String, Description: Schema.String, Settable: Schema.Array(Schema.String), Source: Schema.String, Destination: Schema.String, Type: Schema.String, Options: Schema.Array(Schema.String) });
export type PluginMount = Schema.Schema.Type<typeof PluginMount>;

export const PluginDevice = Schema.Struct({ Name: Schema.String, Description: Schema.String, Settable: Schema.Array(Schema.String), Path: Schema.String });
export type PluginDevice = Schema.Schema.Type<typeof PluginDevice>;

export const PluginEnv = Schema.Struct({ Name: Schema.String, Description: Schema.String, Settable: Schema.Array(Schema.String), Value: Schema.String });
export type PluginEnv = Schema.Schema.Type<typeof PluginEnv>;

export const PluginInterfaceType = Schema.Struct({ Prefix: Schema.String, Capability: Schema.String, Version: Schema.String });
export type PluginInterfaceType = Schema.Schema.Type<typeof PluginInterfaceType>;

export const PluginPrivilege = Schema.Struct({ Name: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), Value: Schema.optional(Schema.Array(Schema.String)) });
export type PluginPrivilege = Schema.Schema.Type<typeof PluginPrivilege>;

export const Plugin = Schema.Struct({ Id: Schema.optional(Schema.String), Name: Schema.String, Enabled: Schema.Boolean, Settings: Schema.Struct({ Mounts: Schema.Array(PluginMount), Env: Schema.Array(Schema.String), Args: Schema.Array(Schema.String), Devices: Schema.Array(PluginDevice) }), PluginReference: Schema.optional(Schema.String), Config: Schema.Struct({ DockerVersion: Schema.optional(Schema.String), Description: Schema.String, Documentation: Schema.String, Interface: Schema.Struct({ Types: Schema.Array(PluginInterfaceType), Socket: Schema.String, ProtocolScheme: Schema.optional(Schema.Literals(["", "moby.plugins.http/v1"])) }), Entrypoint: Schema.Array(Schema.String), WorkDir: Schema.String, User: Schema.optional(Schema.Struct({ UID: Schema.optional(Schema.Int), GID: Schema.optional(Schema.Int) })), Network: Schema.Struct({ Type: Schema.String }), Linux: Schema.Struct({ Capabilities: Schema.Array(Schema.String), AllowAllDevices: Schema.Boolean, Devices: Schema.Array(PluginDevice) }), PropagatedMount: Schema.String, IpcHost: Schema.Boolean, PidHost: Schema.Boolean, Mounts: Schema.Array(PluginMount), Env: Schema.Array(PluginEnv), Args: Schema.Struct({ Name: Schema.String, Description: Schema.String, Settable: Schema.Array(Schema.String), Value: Schema.Array(Schema.String) }), rootfs: Schema.optional(Schema.Struct({ type: Schema.optional(Schema.String), diff_ids: Schema.optional(Schema.Array(Schema.String)) })) }) });
export type Plugin = Schema.Schema.Type<typeof Plugin>;

export const NodeSpec = Schema.Struct({ Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Role: Schema.optional(Schema.Literals(["worker", "manager"])), Availability: Schema.optional(Schema.Literals(["active", "pause", "drain"])) });
export type NodeSpec = Schema.Schema.Type<typeof NodeSpec>;

export const Platform = Schema.Struct({ Architecture: Schema.optional(Schema.String), OS: Schema.optional(Schema.String) });
export type Platform = Schema.Schema.Type<typeof Platform>;

export const EngineDescription = Schema.Struct({ EngineVersion: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Plugins: Schema.optional(Schema.Array(Schema.Struct({ Type: Schema.optional(Schema.String), Name: Schema.optional(Schema.String) }))) });
export type EngineDescription = Schema.Schema.Type<typeof EngineDescription>;

export const TLSInfo = Schema.Struct({ TrustRoot: Schema.optional(Schema.String), CertIssuerSubject: Schema.optional(Schema.String), CertIssuerPublicKey: Schema.optional(Schema.String) });
export type TLSInfo = Schema.Schema.Type<typeof TLSInfo>;

export const NodeDescription = Schema.Struct({ Hostname: Schema.optional(Schema.String), Platform: Schema.optional(Platform), Resources: Schema.optional(ResourceObject), Engine: Schema.optional(EngineDescription), TLSInfo: Schema.optional(TLSInfo) });
export type NodeDescription = Schema.Schema.Type<typeof NodeDescription>;

export const NodeState = Schema.Literals(["unknown", "down", "ready", "disconnected"]);
export type NodeState = Schema.Schema.Type<typeof NodeState>;

export const NodeStatus = Schema.Struct({ State: Schema.optional(NodeState), Message: Schema.optional(Schema.String), Addr: Schema.optional(Schema.String) });
export type NodeStatus = Schema.Schema.Type<typeof NodeStatus>;

export const Reachability = Schema.Literals(["unknown", "unreachable", "reachable"]);
export type Reachability = Schema.Schema.Type<typeof Reachability>;

export const ManagerStatus = Schema.Struct({ Leader: Boolean_default_false_prop, Reachability: Schema.optional(Reachability), Addr: Schema.optional(Schema.String) });
export type ManagerStatus = Schema.Schema.Type<typeof ManagerStatus> | null;

export const Node = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(NodeSpec), Description: Schema.optional(NodeDescription), Status: Schema.optional(NodeStatus), ManagerStatus: Schema.optional(ManagerStatus) });
export type Node = Schema.Schema.Type<typeof Node>;

export const SwarmSpec = Schema.Struct({ Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Orchestration: Schema.optional(Schema.NullOr(Schema.Struct({ TaskHistoryRetentionLimit: Schema.optional(Schema.Int) }))), Raft: Schema.optional(Schema.Struct({ SnapshotInterval: Schema.optional(Schema.Int), KeepOldSnapshots: Schema.optional(Schema.Int), LogEntriesForSlowFollowers: Schema.optional(Schema.Int), ElectionTick: Schema.optional(Schema.Int), HeartbeatTick: Schema.optional(Schema.Int) })), Dispatcher: Schema.optional(Schema.NullOr(Schema.Struct({ HeartbeatPeriod: Schema.optional(Schema.Int) }))), CAConfig: Schema.optional(Schema.NullOr(Schema.Struct({ NodeCertExpiry: Schema.optional(Schema.Int), ExternalCAs: Schema.optional(Schema.Array(Schema.Struct({ Protocol: Schema.optional(Schema.Literal("cfssl")), URL: Schema.optional(Schema.String), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)), CACert: Schema.optional(Schema.String) }))), SigningCACert: Schema.optional(Schema.String), SigningCAKey: Schema.optional(Schema.String), ForceRotate: Schema.optional(Schema.Int) }))), EncryptionConfig: Schema.optional(Schema.Struct({ AutoLockManagers: Schema.optional(Schema.Boolean) })), TaskDefaults: Schema.optional(Schema.Struct({ LogDriver: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) })) })) });
export type SwarmSpec = Schema.Schema.Type<typeof SwarmSpec>;

export const ClusterInfo = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(SwarmSpec), TLSInfo: Schema.optional(TLSInfo), RootRotationInProgress: Schema.optional(Schema.Boolean), DataPathPort: Schema.optional(Schema.Int), DefaultAddrPool: Schema.optional(Schema.Array(Schema.String)), SubnetSize: Schema.optional(Schema.Int.check(Schema.isLessThanOrEqualTo(29))) });
export type ClusterInfo = Schema.Schema.Type<typeof ClusterInfo> | null;

export const JoinTokens = Schema.Struct({ Worker: Schema.optional(Schema.String), Manager: Schema.optional(Schema.String) });
export type JoinTokens = Schema.Schema.Type<typeof JoinTokens>;

export const Swarm = ClusterInfo.mapFields(Struct.assign((Schema.Struct({ JoinTokens: Schema.optional(JoinTokens) })).fields));
export type Swarm = Schema.Schema.Type<typeof Swarm>;

export const NetworkAttachmentConfig = Schema.Struct({ Target: Schema.optional(Schema.String), Aliases: Schema.optional(Schema.Array(Schema.String)), DriverOpts: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type NetworkAttachmentConfig = Schema.Schema.Type<typeof NetworkAttachmentConfig>;

export const TaskSpec = Schema.Struct({ PluginSpec: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), Remote: Schema.optional(Schema.String), Disabled: Schema.optional(Schema.Boolean), PluginPrivilege: Schema.optional(Schema.Array(PluginPrivilege)) })), ContainerSpec: Schema.optional(Schema.Struct({ Image: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Command: Schema.optional(Schema.Array(Schema.String)), Args: Schema.optional(Schema.Array(Schema.String)), Hostname: Schema.optional(Schema.String), Env: Schema.optional(Schema.Array(Schema.String)), Dir: Schema.optional(Schema.String), User: Schema.optional(Schema.String), Groups: Schema.optional(Schema.Array(Schema.String)), Privileges: Schema.optional(Schema.Struct({ CredentialSpec: Schema.optional(Schema.Struct({ Config: Schema.optional(Schema.String), File: Schema.optional(Schema.String), Registry: Schema.optional(Schema.String) })), SELinuxContext: Schema.optional(Schema.Struct({ Disable: Schema.optional(Schema.Boolean), User: Schema.optional(Schema.String), Role: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), Level: Schema.optional(Schema.String) })) })), TTY: Schema.optional(Schema.Boolean), OpenStdin: Schema.optional(Schema.Boolean), ReadOnly: Schema.optional(Schema.Boolean), Mounts: Schema.optional(Schema.Array(Mount)), StopSignal: Schema.optional(Schema.String), StopGracePeriod: Schema.optional(Schema.Int), HealthCheck: Schema.optional(HealthConfig), Hosts: Schema.optional(Schema.Array(Schema.String)), DNSConfig: Schema.optional(Schema.Struct({ Nameservers: Schema.optional(Schema.Array(Schema.String)), Search: Schema.optional(Schema.Array(Schema.String)), Options: Schema.optional(Schema.Array(Schema.String)) })), Secrets: Schema.optional(Schema.Array(Schema.Struct({ File: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), UID: Schema.optional(Schema.String), GID: Schema.optional(Schema.String), Mode: Schema.optional(Schema.Int) })), SecretID: Schema.optional(Schema.String), SecretName: Schema.optional(Schema.String) }))), Configs: Schema.optional(Schema.Array(Schema.Struct({ File: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), UID: Schema.optional(Schema.String), GID: Schema.optional(Schema.String), Mode: Schema.optional(Schema.Int) })), Runtime: Schema.optional(Schema.Struct({  })), ConfigID: Schema.optional(Schema.String), ConfigName: Schema.optional(Schema.String) }))), Isolation: Schema.optional(Schema.Literals(["default", "process", "hyperv"])), Init: Schema.optional(Schema.NullOr(Schema.Boolean)), Sysctls: Schema.optional(Schema.Record(Schema.String, Schema.String)), CapabilityAdd: Schema.optional(Schema.Array(Schema.String)), CapabilityDrop: Schema.optional(Schema.Array(Schema.String)), Ulimits: Schema.optional(Schema.Array(Schema.Struct({ Name: Schema.optional(Schema.String), Soft: Schema.optional(Schema.Int), Hard: Schema.optional(Schema.Int) }))) })), NetworkAttachmentSpec: Schema.optional(Schema.Struct({ ContainerID: Schema.optional(Schema.String) })), Resources: Schema.optional(Schema.Struct({ Limits: Schema.optional(Limit), Reservations: Schema.optional(ResourceObject) })), RestartPolicy: Schema.optional(Schema.Struct({ Condition: Schema.optional(Schema.Literals(["none", "on-failure", "any"])), Delay: Schema.optional(Schema.Int), MaxAttempts: Int_default_0_prop, Window: Int_default_0_prop })), Placement: Schema.optional(Schema.Struct({ Constraints: Schema.optional(Schema.Array(Schema.String)), Preferences: Schema.optional(Schema.Array(Schema.Struct({ Spread: Schema.optional(Schema.Struct({ SpreadDescriptor: Schema.optional(Schema.String) })) }))), MaxReplicas: Int_default_0_prop, Platforms: Schema.optional(Schema.Array(Platform)) })), ForceUpdate: Schema.optional(Schema.Int), Runtime: Schema.optional(Schema.String), Networks: Schema.optional(Schema.Array(NetworkAttachmentConfig)), LogDriver: Schema.optional(Schema.Struct({ Name: Schema.optional(Schema.String), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) })) });
export type TaskSpec = Schema.Schema.Type<typeof TaskSpec>;

export const TaskState = Schema.Literals(["new", "allocated", "pending", "assigned", "accepted", "preparing", "ready", "starting", "running", "complete", "shutdown", "failed", "rejected", "remove", "orphaned"]);
export type TaskState = Schema.Schema.Type<typeof TaskState>;

export const Task = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Spec: Schema.optional(TaskSpec), ServiceID: Schema.optional(Schema.String), Slot: Schema.optional(Schema.Int), NodeID: Schema.optional(Schema.String), AssignedGenericResources: Schema.optional(GenericResources), Status: Schema.optional(Schema.Struct({ Timestamp: Schema.optional(Schema.String), State: Schema.optional(TaskState), Message: Schema.optional(Schema.String), Err: Schema.optional(Schema.String), ContainerStatus: Schema.optional(Schema.Struct({ ContainerID: Schema.optional(Schema.String), PID: Schema.optional(Schema.Int), ExitCode: Schema.optional(Schema.Int) })) })), DesiredState: Schema.optional(TaskState), JobIteration: Schema.optional(ObjectVersion) });
export type Task = Schema.Schema.Type<typeof Task>;

export const EndpointPortConfig = Schema.Struct({ Name: Schema.optional(Schema.String), Protocol: Schema.optional(Schema.Literals(["tcp", "udp", "sctp"])), TargetPort: Schema.optional(Schema.Int), PublishedPort: Schema.optional(Schema.Int), PublishMode: Schema_default_ingress_prop });
export type EndpointPortConfig = Schema.Schema.Type<typeof EndpointPortConfig>;

export const EndpointSpec = Schema.Struct({ Mode: Schema_default_vip_prop, Ports: Schema.optional(Schema.Array(EndpointPortConfig)) });
export type EndpointSpec = Schema.Schema.Type<typeof EndpointSpec>;

export const ServiceSpec = Schema.Struct({ Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), TaskTemplate: Schema.optional(TaskSpec), Mode: Schema.optional(Schema.Struct({ Replicated: Schema.optional(Schema.Struct({ Replicas: Schema.optional(Schema.Int) })), Global: Schema.optional(Schema.Struct({  })), ReplicatedJob: Schema.optional(Schema.Struct({ MaxConcurrent: Int_default_1_prop, TotalCompletions: Schema.optional(Schema.Int) })), GlobalJob: Schema.optional(Schema.Struct({  })) })), UpdateConfig: Schema.optional(Schema.Struct({ Parallelism: Schema.optional(Schema.Int), Delay: Schema.optional(Schema.Int), FailureAction: Schema.optional(Schema.Literals(["continue", "pause", "rollback"])), Monitor: Schema.optional(Schema.Int), MaxFailureRatio: Schema.optional(Schema.Number), Order: Schema.optional(Schema.Literals(["stop-first", "start-first"])) })), RollbackConfig: Schema.optional(Schema.Struct({ Parallelism: Schema.optional(Schema.Int), Delay: Schema.optional(Schema.Int), FailureAction: Schema.optional(Schema.Literals(["continue", "pause"])), Monitor: Schema.optional(Schema.Int), MaxFailureRatio: Schema.optional(Schema.Number), Order: Schema.optional(Schema.Literals(["stop-first", "start-first"])) })), Networks: Schema.optional(Schema.Array(NetworkAttachmentConfig)), EndpointSpec: Schema.optional(EndpointSpec) });
export type ServiceSpec = Schema.Schema.Type<typeof ServiceSpec>;

export const Service = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(ServiceSpec), Endpoint: Schema.optional(Schema.Struct({ Spec: Schema.optional(EndpointSpec), Ports: Schema.optional(Schema.Array(EndpointPortConfig)), VirtualIPs: Schema.optional(Schema.Array(Schema.Struct({ NetworkID: Schema.optional(Schema.String), Addr: Schema.optional(Schema.String) }))) })), UpdateStatus: Schema.optional(Schema.Struct({ State: Schema.optional(Schema.Literals(["updating", "paused", "completed"])), StartedAt: Schema.optional(Schema.String), CompletedAt: Schema.optional(Schema.String), Message: Schema.optional(Schema.String) })), ServiceStatus: Schema.optional(Schema.Struct({ RunningTasks: Schema.optional(Schema.Int), DesiredTasks: Schema.optional(Schema.Int), CompletedTasks: Schema.optional(Schema.Int) })), JobStatus: Schema.optional(Schema.Struct({ JobIteration: Schema.optional(ObjectVersion), LastExecution: Schema.optional(Schema.String) })) });
export type Service = Schema.Schema.Type<typeof Service>;

export const ImageDeleteResponseItem = Schema.Struct({ Untagged: Schema.optional(Schema.String), Deleted: Schema.optional(Schema.String) });
export type ImageDeleteResponseItem = Schema.Schema.Type<typeof ImageDeleteResponseItem>;

export const ServiceUpdateResponse = Schema.Struct({ Warnings: Schema.optional(Schema.Array(Schema.String)) });
export type ServiceUpdateResponse = Schema.Schema.Type<typeof ServiceUpdateResponse>;

export const ContainerSummary = Schema.Struct({ Id: Schema.optional(Schema.String), Names: Schema.optional(Schema.Array(Schema.String)), Image: Schema.optional(Schema.String), ImageID: Schema.optional(Schema.String), Command: Schema.optional(Schema.String), Created: Schema.optional(Schema.Int), Ports: Schema.optional(Schema.Array(Port)), SizeRw: Schema.optional(Schema.Int), SizeRootFs: Schema.optional(Schema.Int), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), State: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), HostConfig: Schema.optional(Schema.Struct({ NetworkMode: Schema.optional(Schema.String) })), NetworkSettings: Schema.optional(Schema.Struct({ Networks: Schema.optional(Schema.Record(Schema.String, EndpointSettings)) })), Mounts: Schema.optional(Schema.Array(MountPoint)) });
export type ContainerSummary = Schema.Schema.Type<typeof ContainerSummary>;

export const Driver = Schema.Struct({ Name: Schema.String, Options: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type Driver = Schema.Schema.Type<typeof Driver>;

export const SecretSpec = Schema.Struct({ Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Data: Schema.optional(Schema.String), Driver: Schema.optional(Driver), Templating: Schema.optional(Driver) });
export type SecretSpec = Schema.Schema.Type<typeof SecretSpec>;

export const Secret = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(SecretSpec) });
export type Secret = Schema.Schema.Type<typeof Secret>;

export const ConfigSpec = Schema.Struct({ Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)), Data: Schema.optional(Schema.String), Templating: Schema.optional(Driver) });
export type ConfigSpec = Schema.Schema.Type<typeof ConfigSpec>;

export const Config = Schema.Struct({ ID: Schema.optional(Schema.String), Version: Schema.optional(ObjectVersion), CreatedAt: Schema.optional(Schema.String), UpdatedAt: Schema.optional(Schema.String), Spec: Schema.optional(ConfigSpec) });
export type Config = Schema.Schema.Type<typeof Config>;

export const ContainerState = Schema.Struct({ Status: Schema.optional(Schema.Literals(["created", "running", "paused", "restarting", "removing", "exited", "dead"])), Running: Schema.optional(Schema.Boolean), Paused: Schema.optional(Schema.Boolean), Restarting: Schema.optional(Schema.Boolean), OOMKilled: Schema.optional(Schema.Boolean), Dead: Schema.optional(Schema.Boolean), Pid: Schema.optional(Schema.Int), ExitCode: Schema.optional(Schema.Int), Error: Schema.optional(Schema.String), StartedAt: Schema.optional(Schema.String), FinishedAt: Schema.optional(Schema.String), Health: Schema.optional(Health) });
export type ContainerState = Schema.Schema.Type<typeof ContainerState> | null;

export const ContainerCreateResponse = Schema.Struct({ Id: Schema.String, Warnings: Schema.Array(Schema.String) });
export type ContainerCreateResponse = Schema.Schema.Type<typeof ContainerCreateResponse>;

export const ContainerWaitExitError = Schema.Struct({ Message: Schema.optional(Schema.String) });
export type ContainerWaitExitError = Schema.Schema.Type<typeof ContainerWaitExitError>;

export const ContainerWaitResponse = Schema.Struct({ StatusCode: Schema.Int, Error: Schema.optional(ContainerWaitExitError) });
export type ContainerWaitResponse = Schema.Schema.Type<typeof ContainerWaitResponse>;

export const SystemVersion = Schema.Struct({ Platform: Schema.optional(Schema.Struct({ Name: Schema.String })), Components: Schema.optional(Schema.Array(Schema.Struct({ Name: Schema.String, Version: Schema.String, Details: Schema.optional(Schema.NullOr(Schema.Struct({  }))) }))), Version: Schema.optional(Schema.String), ApiVersion: Schema.optional(Schema.String), MinAPIVersion: Schema.optional(Schema.String), GitCommit: Schema.optional(Schema.String), GoVersion: Schema.optional(Schema.String), Os: Schema.optional(Schema.String), Arch: Schema.optional(Schema.String), KernelVersion: Schema.optional(Schema.String), Experimental: Schema.optional(Schema.Boolean), BuildTime: Schema.optional(Schema.String) });
export type SystemVersion = Schema.Schema.Type<typeof SystemVersion>;

export const PluginsInfo = Schema.Struct({ Volume: Schema.optional(Schema.Array(Schema.String)), Network: Schema.optional(Schema.Array(Schema.String)), Authorization: Schema.optional(Schema.Array(Schema.String)), Log: Schema.optional(Schema.Array(Schema.String)) });
export type PluginsInfo = Schema.Schema.Type<typeof PluginsInfo>;

export const IndexInfo = Schema.Struct({ Name: Schema.optional(Schema.String), Mirrors: Schema.optional(Schema.Array(Schema.String)), Secure: Schema.optional(Schema.Boolean), Official: Schema.optional(Schema.Boolean) });
export type IndexInfo = Schema.Schema.Type<typeof IndexInfo> | null;

export const RegistryServiceConfig = Schema.Struct({ AllowNondistributableArtifactsCIDRs: Schema.optional(Schema.Array(Schema.String)), AllowNondistributableArtifactsHostnames: Schema.optional(Schema.Array(Schema.String)), InsecureRegistryCIDRs: Schema.optional(Schema.Array(Schema.String)), IndexConfigs: Schema.optional(Schema.Record(Schema.String, IndexInfo)), Mirrors: Schema.optional(Schema.Array(Schema.String)) });
export type RegistryServiceConfig = Schema.Schema.Type<typeof RegistryServiceConfig> | null;

export const Runtime = Schema.Struct({ path: Schema.optional(Schema.String), runtimeArgs: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))) });
export type Runtime = Schema.Schema.Type<typeof Runtime>;

export const LocalNodeState = Schema_default_value;
export type LocalNodeState = Schema.Schema.Type<typeof LocalNodeState>;

export const PeerNode = Schema.Struct({ NodeID: Schema.optional(Schema.String), Addr: Schema.optional(Schema.String) });
export type PeerNode = Schema.Schema.Type<typeof PeerNode>;

export const SwarmInfo = Schema.Struct({ NodeID: String_default_value_prop, NodeAddr: String_default_value_prop, LocalNodeState: Schema.optional(LocalNodeState), ControlAvailable: Boolean_default_false_prop, Error: String_default_value_prop, RemoteManagers: Schema.optional(Schema.NullOr(Schema.Array(PeerNode))), Nodes: Schema.optional(Schema.NullOr(Schema.Int)), Managers: Schema.optional(Schema.NullOr(Schema.Int)), Cluster: Schema.optional(ClusterInfo) });
export type SwarmInfo = Schema.Schema.Type<typeof SwarmInfo>;

export const Commit = Schema.Struct({ ID: Schema.optional(Schema.String), Expected: Schema.optional(Schema.String) });
export type Commit = Schema.Schema.Type<typeof Commit>;

export const SystemInfo = Schema.Struct({ ID: Schema.optional(Schema.String), Containers: Schema.optional(Schema.Int), ContainersRunning: Schema.optional(Schema.Int), ContainersPaused: Schema.optional(Schema.Int), ContainersStopped: Schema.optional(Schema.Int), Images: Schema.optional(Schema.Int), Driver: Schema.optional(Schema.String), DriverStatus: Schema.optional(Schema.Array(Schema.Array(Schema.String))), DockerRootDir: Schema.optional(Schema.String), Plugins: Schema.optional(PluginsInfo), MemoryLimit: Schema.optional(Schema.Boolean), SwapLimit: Schema.optional(Schema.Boolean), KernelMemoryTCP: Schema.optional(Schema.Boolean), CpuCfsPeriod: Schema.optional(Schema.Boolean), CpuCfsQuota: Schema.optional(Schema.Boolean), CPUShares: Schema.optional(Schema.Boolean), CPUSet: Schema.optional(Schema.Boolean), PidsLimit: Schema.optional(Schema.Boolean), OomKillDisable: Schema.optional(Schema.Boolean), IPv4Forwarding: Schema.optional(Schema.Boolean), BridgeNfIptables: Schema.optional(Schema.Boolean), BridgeNfIp6tables: Schema.optional(Schema.Boolean), Debug: Schema.optional(Schema.Boolean), NFd: Schema.optional(Schema.Int), NGoroutines: Schema.optional(Schema.Int), SystemTime: Schema.optional(Schema.String), LoggingDriver: Schema.optional(Schema.String), CgroupDriver: Schema_default_cgroupfs_prop, CgroupVersion: Schema_default_1_prop, NEventsListener: Schema.optional(Schema.Int), KernelVersion: Schema.optional(Schema.String), OperatingSystem: Schema.optional(Schema.String), OSVersion: Schema.optional(Schema.String), OSType: Schema.optional(Schema.String), Architecture: Schema.optional(Schema.String), NCPU: Schema.optional(Schema.Int), MemTotal: Schema.optional(Schema.Int), IndexServerAddress: String_default_https_index_docker_io_v1_prop, RegistryConfig: Schema.optional(RegistryServiceConfig), GenericResources: Schema.optional(GenericResources), HttpProxy: Schema.optional(Schema.String), HttpsProxy: Schema.optional(Schema.String), NoProxy: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), Labels: Schema.optional(Schema.Array(Schema.String)), ExperimentalBuild: Schema.optional(Schema.Boolean), ServerVersion: Schema.optional(Schema.String), Runtimes: Schema.optional(Schema.Record(Schema.String, Runtime)), DefaultRuntime: String_default_runc_prop, Swarm: Schema.optional(SwarmInfo), LiveRestoreEnabled: Boolean_default_false_prop, Isolation: Schema_default_default_prop, InitBinary: Schema.optional(Schema.String), ContainerdCommit: Schema.optional(Commit), RuncCommit: Schema.optional(Commit), InitCommit: Schema.optional(Commit), SecurityOptions: Schema.optional(Schema.Array(Schema.String)), ProductLicense: Schema.optional(Schema.String), DefaultAddressPools: Schema.optional(Schema.Array(Schema.Struct({ Base: Schema.optional(Schema.String), Size: Schema.optional(Schema.Int) }))), Warnings: Schema.optional(Schema.Array(Schema.String)) });
export type SystemInfo = Schema.Schema.Type<typeof SystemInfo>;

export const EventActor = Schema.Struct({ ID: Schema.optional(Schema.String), Attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type EventActor = Schema.Schema.Type<typeof EventActor>;

export const EventMessage = Schema.Struct({ Type: Schema.optional(Schema.Literals(["builder", "config", "container", "daemon", "image", "network", "node", "plugin", "secret", "service", "volume"])), Action: Schema.optional(Schema.String), Actor: Schema.optional(EventActor), scope: Schema.optional(Schema.Literals(["local", "swarm"])), time: Schema.optional(Schema.Int), timeNano: Schema.optional(Schema.Int) });
export type EventMessage = Schema.Schema.Type<typeof EventMessage>;

export const OCIDescriptor = Schema.Struct({ mediaType: Schema.optional(Schema.String), digest: Schema.optional(Schema.String), size: Schema.optional(Schema.Int) });
export type OCIDescriptor = Schema.Schema.Type<typeof OCIDescriptor>;

export const OCIPlatform = Schema.Struct({ architecture: Schema.optional(Schema.String), os: Schema.optional(Schema.String), "os.version": Schema.optional(Schema.String), "os.features": Schema.optional(Schema.Array(Schema.String)), variant: Schema.optional(Schema.String) });
export type OCIPlatform = Schema.Schema.Type<typeof OCIPlatform>;

export const DistributionInspect = Schema.Struct({ Descriptor: OCIDescriptor, Platforms: Schema.Array(OCIPlatform) });
export type DistributionInspect = Schema.Schema.Type<typeof DistributionInspect>;

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ all: Union_default_false_prop, limit: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), size: Union_default_false_prop, filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$")))), platform: Schema.optional(Schema.String) })), body: ContainerConfig.mapFields(Struct.assign((Schema.Struct({ HostConfig: Schema.optional(HostConfig), NetworkingConfig: Schema.optional(NetworkingConfig) })).fields)) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ size: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Struct({ Id: Schema.optional(Schema.String), Created: Schema.optional(Schema.String), Path: Schema.optional(Schema.String), Args: Schema.optional(Schema.Array(Schema.String)), State: Schema.optional(ContainerState), Image: Schema.optional(Schema.String), ResolvConfPath: Schema.optional(Schema.String), HostnamePath: Schema.optional(Schema.String), HostsPath: Schema.optional(Schema.String), LogPath: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), RestartCount: Schema.optional(Schema.Int), Driver: Schema.optional(Schema.String), Platform: Schema.optional(Schema.String), MountLabel: Schema.optional(Schema.String), ProcessLabel: Schema.optional(Schema.String), AppArmorProfile: Schema.optional(Schema.String), ExecIDs: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), HostConfig: Schema.optional(HostConfig), GraphDriver: Schema.optional(GraphDriverData), SizeRw: Schema.optional(Schema.Int), SizeRootFs: Schema.optional(Schema.Int), Mounts: Schema.optional(Schema.Array(MountPoint)), Config: Schema.optional(ContainerConfig), NetworkSettings: Schema.optional(NetworkSettings) }), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/top"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ ps_args: String_default_neg_ef_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Struct({ Titles: Schema.optional(Schema.Array(Schema.String)), Processes: Schema.optional(Schema.Array(Schema.Array(Schema.String))) }), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, until: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/changes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/export"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/stats"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ stream: Union_default_true_prop, "one-shot": Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Record(Schema.String, Schema.Unknown), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/resize"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ h: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), w: Schema.optional(Schema.NumberFromString.check(Schema.isInt())) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/start"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ detachKeys: Schema.optional(Schema.String) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 304: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/stop"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ signal: Schema.optional(Schema.String), t: Schema.optional(Schema.NumberFromString.check(Schema.isInt())) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 304: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/restart"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ signal: Schema.optional(Schema.String), t: Schema.optional(Schema.NumberFromString.check(Schema.isInt())) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/kill"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ signal: String_default_SIGKILL_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }), body: Resources.mapFields(Struct.assign((Schema.Struct({ RestartPolicy: Schema.optional(RestartPolicy) })).fields)) },
  responses: { 200: Schema.Struct({ Warnings: Schema.optional(Schema.Array(Schema.String)) }), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/rename"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ name: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/pause"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/unpause"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/attach"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ detachKeys: Schema.optional(Schema.String), logs: Union_default_false_prop, stream: Union_default_false_prop, stdin: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 101: Schema.Unknown, 200: Schema.Unknown, 400: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/attach/ws"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ detachKeys: Schema.optional(Schema.String), logs: Union_default_false_prop, stream: Union_default_false_prop, stdin: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 101: Schema.Unknown, 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/wait"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ condition: Schema_default_notneg_running_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/containers/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ v: Union_default_false_prop, force: Union_default_false_prop, link: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ path: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 400: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("binary"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ path: Schema.String, noOverwriteDirNonDir: Schema.optional(Schema.String), copyUIDGID: Schema.optional(Schema.String) }), path: Schema.Struct({ id: Schema.String }), body: Schema.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: Schema.Literal("HEAD"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ path: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: Schema.Struct({ "X-Docker-Container-Path-Stat": Schema.String }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Struct({ ContainersDeleted: Schema.optional(Schema.Array(Schema.String)), SpaceReclaimed: Schema.optional(Schema.Int) }), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ all: Union_default_false_prop, filters: Schema.optional(Schema.String), "shared-size": Union_default_false_prop, digests: Union_default_false_prop })) },
  responses: { 200: Schema.Array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/build"),
  requestFormat: Schema.Literal("binary"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ dockerfile: String_default_Dockerfile_prop, t: Schema.optional(Schema.String), extrahosts: Schema.optional(Schema.String), remote: Schema.optional(Schema.String), q: Union_default_false_prop, nocache: Union_default_false_prop, cachefrom: Schema.optional(Schema.String), pull: Schema.optional(Schema.String), rm: Union_default_true_prop, forcerm: Union_default_false_prop, memory: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), memswap: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), cpushares: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), cpusetcpus: Schema.optional(Schema.String), cpuperiod: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), cpuquota: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), buildargs: Schema.optional(Schema.String), shmsize: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), squash: Schema.optional(Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })))), labels: Schema.optional(Schema.String), networkmode: Schema.optional(Schema.String), platform: Schema.optional(Schema.String), target: Schema.optional(Schema.String), outputs: Schema.optional(Schema.String) })), header: Schema.optional(Schema.Struct({ "Content-type": Schema.optional(Schema.Literal("application/x-tar")), "X-Registry-Config": Schema.optional(Schema.String) })), body: Schema.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/build/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ "keep-storage": Schema.optional(Schema.NumberFromString.check(Schema.isInt())), all: Schema.optional(Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })))), filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Struct({ CachesDeleted: Schema.optional(Schema.Array(Schema.String)), SpaceReclaimed: Schema.optional(Schema.Int) }), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/create"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ fromImage: Schema.optional(Schema.String), fromSrc: Schema.optional(Schema.String), repo: Schema.optional(Schema.String), tag: Schema.optional(Schema.String), message: Schema.optional(Schema.String), changes: Schema.optional(Schema.Array(Schema.String)), platform: Schema.optional(Schema.String) })), header: Schema.optional(Schema.Struct({ "X-Registry-Auth": Schema.optional(Schema.String) })), body: Schema.String },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/history"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Array(Schema.Struct({ Id: Schema.String, Created: Schema.Int, CreatedBy: Schema.String, Tags: Schema.Array(Schema.String), Size: Schema.Int, Comment: Schema.String })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/{name}/push"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ tag: Schema.optional(Schema.String) })), path: Schema.Struct({ name: Schema.String }), header: Schema.Struct({ "X-Registry-Auth": Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/{name}/tag"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ repo: Schema.optional(Schema.String), tag: Schema.optional(Schema.String) })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 201: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/images/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Union_default_false_prop, noprune: Union_default_false_prop })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/search"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ term: Schema.String, limit: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), filters: Schema.optional(Schema.String) }) },
  responses: { 200: Schema.Array(Schema.Struct({ description: Schema.optional(Schema.String), is_official: Schema.optional(Schema.Boolean), is_automated: Schema.optional(Schema.Boolean), name: Schema.optional(Schema.String), star_count: Schema.optional(Schema.Int) })), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Struct({ ImagesDeleted: Schema.optional(Schema.Array(ImageDeleteResponseItem)), SpaceReclaimed: Schema.optional(Schema.Int) }), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/auth"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: AuthConfig },
  responses: { 200: Schema.Struct({ Status: Schema.String, IdentityToken: Schema.optional(Schema.String) }), 204: Schema.Unknown, 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/info"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/version"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/_ping"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
  responseHeaders: { 200: Schema.Struct({ Swarm: Schema_default_inactive_prop, "Docker-Experimental": Schema.Boolean, "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop, "API-Version": Schema.String, "Builder-Version": String_default_2_prop }), 500: Schema.Struct({ "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop }) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: Schema.Literal("HEAD"),
  path: Schema.Literal("/_ping"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
  responseHeaders: { 200: Schema.Struct({ Swarm: Schema_default_inactive_prop, "Docker-Experimental": Schema.Boolean, "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop, "API-Version": Schema.String, "Builder-Version": Schema.String }) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/commit"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ container: Schema.optional(Schema.String), repo: Schema.optional(Schema.String), tag: Schema.optional(Schema.String), comment: Schema.optional(Schema.String), author: Schema.optional(Schema.String), pause: Union_default_true_prop, changes: Schema.optional(Schema.String) })), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/events"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ since: Schema.optional(Schema.String), until: Schema.optional(Schema.String), filters: Schema.optional(Schema.String) })) },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/system/df"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ type: Schema.optional(Schema.Array(Schema.Literals(["container", "image", "volume", "build-cache"]))) })) },
  responses: { 200: Schema.Struct({ LayersSize: Schema.optional(Schema.Int), Images: Schema.optional(Schema.Array(ImageSummary)), Containers: Schema.optional(Schema.Array(ContainerSummary)), Volumes: Schema.optional(Schema.Array(Volume)), BuildCache: Schema.optional(Schema.Array(BuildCache)) }), 500: ErrorResponse },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/get"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/get"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ names: Schema.optional(Schema.Array(Schema.String)) })) },
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/load"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ quiet: Union_default_false_prop })) },
  responses: { 200: Schema.Unknown, 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/exec"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }), body: Schema.optional(Schema.Struct({ AttachStdin: Schema.optional(Schema.Boolean), AttachStdout: Schema.optional(Schema.Boolean), AttachStderr: Schema.optional(Schema.Boolean), ConsoleSize: Schema.optional(Schema.NullOr(Schema.Array(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))).check(Schema.isMinLength(2), Schema.isMaxLength(2)))), DetachKeys: Schema.optional(Schema.String), Tty: Schema.optional(Schema.Boolean), Env: Schema.optional(Schema.Array(Schema.String)), Cmd: Schema.optional(Schema.Array(Schema.String)), Privileged: Boolean_default_false_prop, User: Schema.optional(Schema.String), WorkingDir: Schema.optional(Schema.String) })) },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/exec/{id}/start"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }), body: Schema.optional(Schema.Struct({ Detach: Schema.optional(Schema.Boolean), Tty: Schema.optional(Schema.Boolean), ConsoleSize: Schema.optional(Schema.NullOr(Schema.Array(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0))).check(Schema.isMinLength(2), Schema.isMaxLength(2)))) })) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 409: Schema.Unknown },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/exec/{id}/resize"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ h: Schema.optional(Schema.NumberFromString.check(Schema.isInt())), w: Schema.optional(Schema.NumberFromString.check(Schema.isInt())) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/exec/{id}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Struct({ CanRemove: Schema.optional(Schema.Boolean), DetachKeys: Schema.optional(Schema.String), ID: Schema.optional(Schema.String), Running: Schema.optional(Schema.Boolean), ExitCode: Schema.optional(Schema.Int), ProcessConfig: Schema.optional(ProcessConfig), OpenStdin: Schema.optional(Schema.Boolean), OpenStderr: Schema.optional(Schema.Boolean), OpenStdout: Schema.optional(Schema.Boolean), ContainerID: Schema.optional(Schema.String), Pid: Schema.optional(Schema.Int) }), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/volumes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/volumes/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()) }), path: Schema.Struct({ name: Schema.String }), body: Schema.optional(Schema.Struct({ Spec: Schema.optional(ClusterVolumeSpec) })) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Union_default_false_prop })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/volumes/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Struct({ VolumesDeleted: Schema.optional(Schema.Array(Schema.String)), SpaceReclaimed: Schema.optional(Schema.Int) }), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/networks"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/networks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ verbose: Union_default_false_prop, scope: Schema.optional(Schema.String) })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/networks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.Struct({ Name: Schema.String, CheckDuplicate: Schema.optional(Schema.Boolean), Driver: String_default_bridge_prop, Internal: Schema.optional(Schema.Boolean), Attachable: Schema.optional(Schema.Boolean), Ingress: Schema.optional(Schema.Boolean), IPAM: Schema.optional(IPAM), EnableIPv6: Schema.optional(Schema.Boolean), Options: Schema.optional(Schema.Record(Schema.String, Schema.String)), Labels: Schema.optional(Schema.Record(Schema.String, Schema.String)) }) },
  responses: { 201: Schema.Struct({ Id: Schema.optional(Schema.String), Warning: Schema.optional(Schema.String) }), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/{id}/connect"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }), body: Schema.optional(Schema.Struct({ Container: Schema.optional(Schema.String), EndpointConfig: Schema.optional(EndpointSettings) })) },
  responses: { 200: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/{id}/disconnect"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }), body: Schema.optional(Schema.Struct({ Container: Schema.optional(Schema.String), Force: Schema.optional(Schema.Boolean) })) },
  responses: { 200: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Struct({ NetworksDeleted: Schema.optional(Schema.Array(Schema.String)) }), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins/privileges"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ remote: Schema.String }) },
  responses: { 200: Schema.Array(PluginPrivilege), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/pull"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ remote: Schema.String, name: Schema.optional(Schema.String) }), header: Schema.optional(Schema.Struct({ "X-Registry-Auth": Schema.optional(Schema.String) })), body: Schema.Array(PluginPrivilege) },
  responses: { 204: Schema.Unknown, 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/plugins/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Union_default_false_prop })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/enable"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ timeout: Schema_default_0_prop })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/disable"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Schema.optional(Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })))) })), path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/upgrade"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ remote: Schema.String }), path: Schema.Struct({ name: Schema.String }), header: Schema.optional(Schema.Struct({ "X-Registry-Auth": Schema.optional(Schema.String) })), body: Schema.Array(PluginPrivilege) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/create"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ name: Schema.String }) },
  responses: { 204: Schema.Unknown, 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/push"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/set"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }), body: Schema.Array(Schema.String) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/nodes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Node), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/nodes/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/nodes/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/nodes/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()) }), path: Schema.Struct({ id: Schema.String }), body: NodeSpec },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/swarm"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/init"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.optional(Schema.Struct({ ListenAddr: Schema.optional(Schema.String), AdvertiseAddr: Schema.optional(Schema.String), DataPathAddr: Schema.optional(Schema.String), DataPathPort: Schema.optional(Schema.Int), DefaultAddrPool: Schema.optional(Schema.Array(Schema.String)), ForceNewCluster: Schema.optional(Schema.Boolean), SubnetSize: Schema.optional(Schema.Int), Spec: Schema.optional(SwarmSpec) })) },
  responses: { 200: Schema.String, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/join"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.optional(Schema.Struct({ ListenAddr: Schema.optional(Schema.String), AdvertiseAddr: Schema.optional(Schema.String), DataPathAddr: Schema.optional(Schema.String), RemoteAddrs: Schema.optional(Schema.Array(Schema.String)), JoinToken: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/leave"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ force: Union_default_false_prop })) },
  responses: { 200: Schema.Unknown, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()), rotateWorkerToken: Union_default_false_prop, rotateManagerToken: Union_default_false_prop, rotateManagerUnlockKey: Union_default_false_prop }), body: SwarmSpec },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/swarm/unlockkey"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Struct({ UnlockKey: Schema.optional(Schema.String) }), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/unlock"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.optional(Schema.Struct({ UnlockKey: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Unknown, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String), status: Schema.optional(Schema.Union([Schema.Boolean, Schema.String, Schema.Number]).pipe(Schema.decodeTo(Schema.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })))) })) },
  responses: { 200: Schema.Array(Service), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/services/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.optional(Schema.Struct({ "X-Registry-Auth": Schema.optional(Schema.String) })), body: Schema.StructWithRest(ServiceSpec, [Schema.Record(Schema.String, Schema.Unknown)]) },
  responses: { 201: Schema.Struct({ ID: Schema.optional(Schema.String), Warning: Schema.optional(Schema.String) }), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ insertDefaults: Union_default_false_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/services/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/services/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()), registryAuthFrom: Schema_default_spec_prop, rollback: Schema.optional(Schema.String) }), path: Schema.Struct({ id: Schema.String }), header: Schema.optional(Schema.Struct({ "X-Registry-Auth": Schema.optional(Schema.String) })), body: Schema.StructWithRest(ServiceSpec, [Schema.Record(Schema.String, Schema.Unknown)]) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ details: Union_default_false_prop, follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown, 503: Schema.Unknown },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ details: Union_default_false_prop, follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop })), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown, 503: Schema.Unknown },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/secrets"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/secrets/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.StructWithRest(SecretSpec, [Schema.Record(Schema.String, Schema.Unknown)]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/secrets/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/secrets/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/secrets/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()) }), path: Schema.Struct({ id: Schema.String }), body: SecretSpec },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/configs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ filters: Schema.optional(Schema.String) })) },
  responses: { 200: Schema.Array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/configs/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.StructWithRest(ConfigSpec, [Schema.Record(Schema.String, Schema.Unknown)]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/configs/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/configs/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/configs/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ version: Schema.NumberFromString.check(Schema.isInt()) }), path: Schema.Struct({ id: Schema.String }), body: ConfigSpec },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/distribution/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/session"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 101: Schema.Unknown, 400: Schema.Unknown, 500: Schema.Unknown },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/containers/json": get_ContainerList,
"/containers/{id}/json": get_ContainerInspect,
"/containers/{id}/top": get_ContainerTop,
"/containers/{id}/logs": get_ContainerLogs,
"/containers/{id}/changes": get_ContainerChanges,
"/containers/{id}/export": get_ContainerExport,
"/containers/{id}/stats": get_ContainerStats,
"/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
"/containers/{id}/archive": get_ContainerArchive,
"/images/json": get_ImageList,
"/images/{name}/json": get_ImageInspect,
"/images/{name}/history": get_ImageHistory,
"/images/search": get_ImageSearch,
"/info": get_SystemInfo,
"/version": get_SystemVersion,
"/_ping": get_SystemPing,
"/events": get_SystemEvents,
"/system/df": get_SystemDataUsage,
"/images/{name}/get": get_ImageGet,
"/images/get": get_ImageGetAll,
"/exec/{id}/json": get_ExecInspect,
"/volumes": get_VolumeList,
"/volumes/{name}": get_VolumeInspect,
"/networks": get_NetworkList,
"/networks/{id}": get_NetworkInspect,
"/plugins": get_PluginList,
"/plugins/privileges": get_GetPluginPrivileges,
"/plugins/{name}/json": get_PluginInspect,
"/nodes": get_NodeList,
"/nodes/{id}": get_NodeInspect,
"/swarm": get_SwarmInspect,
"/swarm/unlockkey": get_SwarmUnlockkey,
"/services": get_ServiceList,
"/services/{id}": get_ServiceInspect,
"/services/{id}/logs": get_ServiceLogs,
"/tasks": get_TaskList,
"/tasks/{id}": get_TaskInspect,
"/tasks/{id}/logs": get_TaskLogs,
"/secrets": get_SecretList,
"/secrets/{id}": get_SecretInspect,
"/configs": get_ConfigList,
"/configs/{id}": get_ConfigInspect,
"/distribution/{name}/json": get_DistributionInspect
         },
post: {
           "/containers/create": post_ContainerCreate,
"/containers/{id}/resize": post_ContainerResize,
"/containers/{id}/start": post_ContainerStart,
"/containers/{id}/stop": post_ContainerStop,
"/containers/{id}/restart": post_ContainerRestart,
"/containers/{id}/kill": post_ContainerKill,
"/containers/{id}/update": post_ContainerUpdate,
"/containers/{id}/rename": post_ContainerRename,
"/containers/{id}/pause": post_ContainerPause,
"/containers/{id}/unpause": post_ContainerUnpause,
"/containers/{id}/attach": post_ContainerAttach,
"/containers/{id}/wait": post_ContainerWait,
"/containers/prune": post_ContainerPrune,
"/build": post_ImageBuild,
"/build/prune": post_BuildPrune,
"/images/create": post_ImageCreate,
"/images/{name}/push": post_ImagePush,
"/images/{name}/tag": post_ImageTag,
"/images/prune": post_ImagePrune,
"/auth": post_SystemAuth,
"/commit": post_ImageCommit,
"/images/load": post_ImageLoad,
"/containers/{id}/exec": post_ContainerExec,
"/exec/{id}/start": post_ExecStart,
"/exec/{id}/resize": post_ExecResize,
"/volumes/create": post_VolumeCreate,
"/volumes/prune": post_VolumePrune,
"/networks/create": post_NetworkCreate,
"/networks/{id}/connect": post_NetworkConnect,
"/networks/{id}/disconnect": post_NetworkDisconnect,
"/networks/prune": post_NetworkPrune,
"/plugins/pull": post_PluginPull,
"/plugins/{name}/enable": post_PluginEnable,
"/plugins/{name}/disable": post_PluginDisable,
"/plugins/{name}/upgrade": post_PluginUpgrade,
"/plugins/create": post_PluginCreate,
"/plugins/{name}/push": post_PluginPush,
"/plugins/{name}/set": post_PluginSet,
"/nodes/{id}/update": post_NodeUpdate,
"/swarm/init": post_SwarmInit,
"/swarm/join": post_SwarmJoin,
"/swarm/leave": post_SwarmLeave,
"/swarm/update": post_SwarmUpdate,
"/swarm/unlock": post_SwarmUnlock,
"/services/create": post_ServiceCreate,
"/services/{id}/update": post_ServiceUpdate,
"/secrets/create": post_SecretCreate,
"/secrets/{id}/update": post_SecretUpdate,
"/configs/create": post_ConfigCreate,
"/configs/{id}/update": post_ConfigUpdate,
"/session": post_Session
         },
delete: {
           "/containers/{id}": delete_ContainerDelete,
"/images/{name}": delete_ImageDelete,
"/volumes/{name}": delete_VolumeDelete,
"/networks/{id}": delete_NetworkDelete,
"/plugins/{name}": delete_PluginDelete,
"/nodes/{id}": delete_NodeDelete,
"/services/{id}": delete_ServiceDelete,
"/secrets/{id}": delete_SecretDelete,
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string
      ? K extends `${infer TStatusCode extends number}`
        ? TStatusCode extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : never
      : K extends number
        ? K extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : never;
  }[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends { Encoded: infer I } ? I : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaInputRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never
        : K extends number
          ? K extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<UParams> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>








// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(message: string, readonly cause?: unknown) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return Schema.decodeUnknownSync(schema as Schema.Codec<unknown>)(value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>


export type EffectFetcher = {
  decodePathParams?: (path: string, pathParams: unknown) => string;
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined;
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
  fetch: (input: Parameters<Fetcher["fetch"]>[0]) => Effect.Effect<FetcherResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  ...(fetcher.decodePathParams ? { decodePathParams: fetcher.decodePathParams } : {}),
  ...(fetcher.encodeSearchParams ? { encodeSearchParams: fetcher.encodeSearchParams } : {}),
  ...(fetcher.encodeCookies ? { encodeCookies: fetcher.encodeCookies } : {}),
  ...(fetcher.parseResponseData ? { parseResponseData: fetcher.parseResponseData } : {}),
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input),
      catch: (cause) => new HttpClientError("fetch failed", cause),
    }),
});

// <EffectApiClient>
export class EffectApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;
  private effectFetcher: EffectFetcher;

  constructor(
    fetcher: Fetcher | EffectFetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
  ) {
    this.effectFetcher = options?.effectFetcher ? (fetcher as EffectFetcher) : wrapPromiseFetcher(fetcher as Fetcher);
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath]
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      // Implementation reads a loose param bag; call sites stay typed via MaybeOptionalArg<>.
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            validate?: ValidateSide;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
          })
        | undefined;
      const withResponse = Boolean(requestParams?.withResponse);
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      if ((validateSide === "input" || validateSide === "both") && endpointSchema.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {

          if (self.onValidate) {
            const onValidate = self.onValidate;
            parametersToSend[key] = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "input",
                  method: String(method),
                  path: String(path),
                  schema: schema,
                  value: value,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            parametersToSend[key] = yield* Schema.decodeUnknownEffect(schema as Schema.Codec<unknown>)(value).pipe(
              Effect.mapError((cause) => new HttpClientError("decode failed", cause)),
            );
          }
          }
        }
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: unknown) => {
          const record = (p ?? {}) as Record<string, unknown>;
          return url
            .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
        });
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: unknown) => {
          if (!queryParams || typeof queryParams !== "object") return undefined;
          const searchParams = new URLSearchParams();
          Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
            if (value != null) {
              if (Array.isArray(value)) value.forEach((val) => val != null && searchParams.append(key, String(val)));
              else searchParams.append(key, String(value));
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: unknown, headers: Headers) => {
          if (!cookies || typeof cookies !== "object") return;
          const parts = Object.entries(cookies as Record<string, unknown>)
            .filter(([, value]) => value != null)
            .map(([key, value]) => `${key}=${String(value)}`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: FetcherResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (contentType.includes("text/event-stream")) {
            return response.body ?? null;
          }
          if (contentType.includes("json") || contentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (contentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(self.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query);

      let overrides = requestParams?.overrides as RequestInit | undefined;
      if (parametersToSend.cookie) {
        const headers = new Headers(overrides?.headers);
        encodeCookies(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = yield* self.effectFetcher.fetch({
        method: method as Method,
        path: path as string,
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(overrides ? { overrides } : {}),
      });

      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : yield* Effect.tryPromise({
              try: () => parseData(response),
              catch: (cause) => new HttpClientError("parse failed", cause),
            });

      if (responseFormat !== "sse" && (validateSide === "output" || validateSide === "both") && response.ok && endpointSchema?.responses) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {

          if (self.onValidate) {
            const onValidate = self.onValidate;
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            data = yield* Schema.decodeUnknownEffect(responseSchema as Schema.Codec<unknown>)(data).pipe(
              Effect.mapError((cause) => new HttpClientError("decode failed", cause)),
            );
          }
        }
      }

      const typedResponse = Object.assign(response, {
        data,
        json: () => Promise.resolve(data),
      });

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        if (throwOnStatusError) {
          return yield* Effect.fail(
            new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
          );
        }
        return (withResponse ? typedResponse : data) as InferSuccessData<TEndpoint>;
      }

      return (withResponse ? typedResponse : data) as InferSuccessData<TEndpoint>;
    });
  }

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"get", Path, GetEndpoints[Path]>("get", path, ...params);
  }
post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"post", Path, PostEndpoints[Path]>("post", path, ...params);
  }
delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"delete", Path, DeleteEndpoints[Path]>("delete", path, ...params);
  }
put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"put", Path, PutEndpoints[Path]>("put", path, ...params);
  }
head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"head", Path, HeadEndpoints[Path]>("head", path, ...params);
  }
}

export function createEffectApiClient(
  fetcher: Fetcher | EffectFetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
) {
  return new EffectApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}
// </EffectApiClient>

  